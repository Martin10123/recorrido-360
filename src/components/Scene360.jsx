import { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import Scene from "../helpers/dataScene";
import Hotspot from "./Hotspot";

function Scene360({ sceneId, onHotspotClick }) {
  const [hotspots, setHotspots] = useState([]);

  // Obtener los datos de la escena
  const sceneData = Scene[sceneId];

  // Usar useLoader para cargar la textura (como en el ejemplo)
  const texture = useLoader(TextureLoader, sceneData?.image || "");

  useEffect(() => {
    if (sceneData) {
      // Convert hotspots to array format
      const hotspotArray = Object.entries(sceneData.hotSpots || {}).map(
        ([id, hotspot]) => ({
          id,
          ...hotspot,
          type: hotspot.cssClass === "moveScene" ? "navigation" : "info",
        })
      );
      setHotspots(hotspotArray);
    }
  }, [sceneData]);

  if (!sceneData) {
    return (
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
    );
  }

  if (!texture) {
    return (
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial color="#1e3a8a" />
      </mesh>
    );
  }

  return (
    <group>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>

      {hotspots.map((hotspot) => (
        <Hotspot
          key={hotspot.id}
          hotspot={hotspot}
          onClick={() => onHotspotClick(hotspot)}
        />
      ))}
    </group>
  );
}

export default Scene360;
