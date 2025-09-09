import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Scene360 from "./components/Scene360";
import MiniMap from "./components/MiniMap";
import InfoModal from "./components/InfoModal";
import OrientationWarning from "./components/OrientationWarning";
import LoadingScreen from "./components/LoadingScreen";
import Scene from "./helpers/dataScene";
import hotspotContent from "./helpers/hotspotContent";
import "./index.css";

function App() {
  const [currentScene, setCurrentScene] = useState("insideOne");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showOrientationWarning, setShowOrientationWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, setIsFullscreen] = useState(false);

  // Check device orientation
  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerWidth < 768) {
        setShowOrientationWarning(
          window.orientation === 0 || window.orientation === 180
        );
      } else {
        setShowOrientationWarning(false);
      }
    };

    checkOrientation();
    window.addEventListener("orientationchange", checkOrientation);
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSceneChange = (sceneId) => {
    setCurrentScene(sceneId);
  };

  const handleHotspotClick = (hotspot) => {
    if (hotspot.type === "info") {
      setModalContent(
        hotspotContent[hotspot.id] || {
          image: hotspot.previewImage,
          text: hotspot.description || "Información adicional disponible.",
        }
      );
      setShowModal(true);
    } else if (hotspot.type === "navigation") {
      handleSceneChange(hotspot.scene);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showOrientationWarning) {
    return (
      <OrientationWarning onDismiss={() => setShowOrientationWarning(false)} />
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center p-4 lg:p-8 bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/20 z-50 relative gap-4 lg:gap-0">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            COTECMAR
          </h1>
          <p className="text-sm text-slate-400 font-medium -mt-1">
            Recorrido Virtual 360°
          </p>
        </div>
        <div className="flex-1 text-center lg:mx-8">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-200 drop-shadow-md">
            {Scene[currentScene]?.title}
          </h2>
        </div>
        <button
          className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 self-end lg:self-auto"
          onClick={toggleFullscreen}
          aria-label="Pantalla completa"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 relative h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]">
        <div className="flex-1 relative bg-black overflow-hidden order-2 lg:order-1">
          <Canvas
            frameloop="demand"
            camera={{ position: [0, 0, 0.1] }}
            style={{ width: "100%", height: "100%" }}
          >
            <Suspense fallback={null}>
              <Scene360
                sceneId={currentScene}
                onHotspotClick={handleHotspotClick}
              />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableDamping
                dampingFactor={0.2}
                autoRotate={false}
                rotateSpeed={-0.5}
                minDistance={100}
                maxDistance={800}
                zoomSpeed={0.8}
                minPolarAngle={Math.PI / 2}
              />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>

        <MiniMap
          currentScene={currentScene}
          onSceneChange={handleSceneChange}
        />
      </div>

      {showModal && (
        <InfoModal content={modalContent} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
