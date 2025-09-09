import { useState } from "react";
import Scene from "../helpers/dataScene";

function MiniMap({ currentScene, onSceneChange }) {
  const [activePlan, setActivePlan] = useState("upper");
  const [isExpanded, setIsExpanded] = useState(false);

  const scenePositions = {
    upper: {
      insideOne: { x: 50, y: 20, label: "Puente de Gobierno" },
      insideTwo: { x: 60, y: 30, label: "Cubierta Bote Crujía Proa" },
      insideThree: { x: 55, y: 35, label: "Cubierta Bote Crujía Proa Babor" },
      insideFour: { x: 70, y: 25, label: "Proa Costado Babor" },
      insideFive: { x: 75, y: 30, label: "Proa Costado Estribor" },
      insideSix: { x: 45, y: 50, label: "Cubierta Principal Costado Babor" },
      insideSeven: {
        x: 55,
        y: 55,
        label: "Cubierta Principal Costado Estribor",
      },
      insideEight: { x: 40, y: 60, label: "Cubierta de Trabajo" },
      insideEleven: { x: 65, y: 40, label: "Cubierta Bote Costado Babor Proa" },
      insideTwelve: { x: 50, y: 65, label: "Cubierta Bote Costado Babor" },
      insideFifteen: {
        x: 35,
        y: 70,
        label: "Cubierta Superior Cuarto de Máquinas",
      },
    },
    lower: {
      insideNine: { x: 45, y: 60, label: "Cabrestante Costado Babor" },
      insideTen: { x: 55, y: 65, label: "Cabrestante Costado Estribor" },
      insideThirteen: {
        x: 30,
        y: 70,
        label: "Cuarto de Máquinas Costado Babor Popa",
      },
      insideFourteen: {
        x: 40,
        y: 75,
        label: "Cuarto de Máquinas Costado Babor Proa",
      },
      insideSixteen: {
        x: 50,
        y: 80,
        label: "Cuarto de Máquinas Costado Estribor",
      },
      insideSeventeen: { x: 60, y: 75, label: "Servo Motor Crujía" },
      insideEighteen: { x: 65, y: 80, label: "Servo Motor Costado Babor" },
      insideNineteen: { x: 70, y: 85, label: "Servo Motor Costado Estribor" },
    },
  };

  const getCurrentPlan = () => {
    const upperScenes = Object.keys(scenePositions.upper);
    return upperScenes.includes(currentScene) ? "upper" : "lower";
  };

  const handleSceneClick = (sceneId) => {
    onSceneChange(sceneId);
    const targetPlan = getCurrentPlan();
    if (targetPlan !== activePlan) {
      setActivePlan(targetPlan);
    }
  };

  const renderSceneMarkers = (plan) => {
    return Object.entries(scenePositions[plan]).map(([sceneId, position]) => {
      const isActive = sceneId === currentScene;

      return (
        <div
          key={sceneId}
          className={`absolute cursor-pointer z-10 transition-all duration-300 hover:scale-110 ${
            isActive ? "scale-110" : ""
          }`}
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
          }}
          onClick={() => handleSceneClick(sceneId)}
          title={position.label}
        >
          <div className="relative w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg shadow-blue-500/50">
            <div className="absolute -top-1 -left-1 w-5 h-5 bg-blue-500/30 rounded-full animate-ping"></div>
          </div>
          {isActive && (
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-md px-3 py-1 text-xs font-medium text-slate-200 whitespace-nowrap shadow-lg">
              {position.label}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`w-full lg:w-80 xl:w-96 bg-slate-900/80 backdrop-blur-xl border-l-0 lg:border-l border-t lg:border-t-0 border-blue-500/20 flex flex-col transition-all duration-300 relative h-48 lg:h-auto ${
        isExpanded ? "lg:w-[450px]" : ""
      }`}
    >
      <div className="p-6 border-b border-blue-500/20">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">
          Mapa de Navegación
        </h3>
        <div className="flex gap-2 flex-wrap">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${
              activePlan === "upper"
                ? "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                : "bg-blue-500/10 border border-blue-500/30 text-slate-400 hover:bg-blue-500/15 hover:border-blue-500/40"
            }`}
            onClick={() => setActivePlan("upper")}
          >
            Cubierta Superior
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${
              activePlan === "lower"
                ? "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                : "bg-blue-500/10 border border-blue-500/30 text-slate-400 hover:bg-blue-500/15 hover:border-blue-500/40"
            }`}
            onClick={() => setActivePlan("lower")}
          >
            Cubierta Inferior
          </button>
          <button
            className="px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xl font-semibold cursor-pointer transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 min-w-[40px]"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Contraer mapa" : "Expandir mapa"}
          >
            {isExpanded ? "−" : "+"}
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 relative">
        <div className="relative w-full h-72 bg-blue-900/10 rounded-xl border border-blue-500/20 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10 20 Q20 10 30 15 L70 15 Q80 10 90 20 L85 80 Q80 90 70 85 L30 85 Q20 90 15 80 Z"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
            />
            <rect
              x="25"
              y="25"
              width="50"
              height="15"
              fill="rgba(59, 130, 246, 0.2)"
            />
            <rect
              x="30"
              y="45"
              width="40"
              height="20"
              fill="rgba(59, 130, 246, 0.2)"
            />
            <rect
              x="35"
              y="70"
              width="30"
              height="10"
              fill="rgba(59, 130, 246, 0.2)"
            />
          </svg>

          {renderSceneMarkers(activePlan)}
        </div>

        <div className="flex flex-col gap-3 mt-6 p-4 bg-blue-900/10 rounded-lg border border-blue-500/20">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="w-3 h-3 rounded-full border-2 border-white bg-emerald-500"></div>
            <span>Navegación</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="w-3 h-3 rounded-full border-2 border-white bg-red-500"></div>
            <span>Información</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="w-3 h-3 rounded-full border-2 border-white bg-blue-500"></div>
            <span>Ubicación Actual</span>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-blue-500/20 bg-blue-900/10">
        <h4 className="text-sm font-semibold text-slate-400 mb-2">
          Escena Actual:
        </h4>
        <p className="text-base font-medium text-slate-200">
          {Scene[currentScene]?.title}
        </p>
      </div>
    </div>
  );
}

export default MiniMap;
