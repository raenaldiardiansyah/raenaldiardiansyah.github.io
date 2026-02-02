import { Canvas} from "@react-three/fiber";
import { useGLTF, useAnimations, Stage } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  /* @ts-ignore */
  const { scene, animations } = useGLTF(url);
  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);

  // Play animasi dari file GLB (jika ada)
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play animasi pertama yang ada di file GLB
      const firstAction = Object.values(actions)[0];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);



  return (
    <group ref={group}>
      <primitive object={scene} scale={1.5} position={[0, -0.75, 0]} />
    </group>
  );
}

export default function RobotScene({ url }: { url: string }) {
  return (
    <div className="w-full h-full min-h-[300px]">
      {/* @ts-ignore */}
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={["#f3f4f6"]} />
        <Suspense fallback={null}>
          {/* @ts-ignore */}
          <Stage environment="city" intensity={0.4} contactShadow={false}>
            <Model url={url} />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}