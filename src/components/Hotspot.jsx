import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import * as THREE from "three";

function Hotspot({ hotspot, onClick }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const getPosition = () => {
    const phi = (90 - hotspot.pitch) * (Math.PI / 180);
    const theta = (hotspot.yaw + 180) * (Math.PI / 180);

    const x = -(Math.sin(phi) * Math.cos(theta));
    const y = Math.cos(phi);
    const z = Math.sin(phi) * Math.sin(theta);

    return [x * 450, y * 450, z * 450];
  };

  const position = getPosition();

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.scale.setScalar(scale);

      if (hovered) {
        meshRef.current.scale.setScalar(scale * 1.2);
      }
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  const getHotspotColor = () => {
    if (hotspot.type === "navigation") return "#10b981";
    if (hotspot.type === "info") return "#ef4444";
    return "#3b82f6";
  };

  const getHotspotIcon = () => {
    if (hotspot.type === "navigation") return "→";
    if (hotspot.type === "info") return "ℹ";
    return "●";
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => {
          setHovered(true);
          setShowLabel(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          setShowLabel(false);
        }}
      >
        <sphereGeometry args={[8, 16, 16]} />
        <meshBasicMaterial
          color={getHotspotColor()}
          transparent
          opacity={0.8}
        />
      </mesh>

      {hotspot.type === "navigation" && (
        <mesh>
          <ringGeometry args={[12, 16, 32]} />
          <meshBasicMaterial
            color={getHotspotColor()}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      <Text
        position={[0, 0, 0]}
        fontSize={12}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {getHotspotIcon()}
      </Text>

      {showLabel && hotspot.label && (
        <Html position={[0, 20, 0]} center distanceFactor={100}>
          <div className="bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-lg px-4 py-2 text-slate-200 text-sm font-medium whitespace-nowrap shadow-lg animate-fadeInUp">
            {hotspot.label}
          </div>
        </Html>
      )}

      {showLabel && hotspot.previewImage && hotspot.type === "navigation" && (
        <Html position={[0, -30, 0]} center distanceFactor={80}>
          <div className="animate-fadeInUp">
            <img
              src={hotspot.previewImage}
              alt="Preview"
              className="w-30 h-20 object-cover rounded-lg border-2 border-emerald-500"
            />
          </div>
        </Html>
      )}
    </group>
  );
}

export default Hotspot;
