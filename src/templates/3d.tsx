import Base from "./base";
import { Canvas } from "@react-three/fiber";
import {Box,Controls,Draggable} from "@/components/3d"
import { Suspense } from "react";
export default function Home() {
  function Floor(props: any) {
    return (
      <mesh {...props} recieveShadow={true}>
        <boxBufferGeometry args={[20, 1, 10]} />
        <meshPhysicalMaterial color="white" />
      </mesh>
    );
  }
  
  function LightBulb(props: any) {
    return (
      <mesh {...props}>
        <pointLight castShadow />
        <sphereBufferGeometry args={[0.2, 30, 10]} />
        <meshPhongMaterial emissive={"yellow"} />
      </mesh>
    );
  }
  return (
    <Base title={"3D Playground"}>
      <div className="w-screen fullScreenWithMobile">
        <Canvas
          shadows={true}
          className={"bg-black"}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <LightBulb position={[0, 3, 0]} />
          <Draggable>
            <Suspense fallback={null}>
              <Box rotateX={3} rotateY={0.2} />
            </Suspense>
          </Draggable>
          <Controls />
          <Floor position={[0, -1, 0]} />
        </Canvas>
      </div>
    </Base>
  );
}
