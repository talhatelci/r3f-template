import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Canvas3D = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-indigo-950">
      <Canvas>
        <PerspectiveCamera makeDefault fov={50} position={[5, 5, 5]} />
        <axesHelper args={[5]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
