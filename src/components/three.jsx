import * as React from "react";
import { useCallback, useMemo, useRef, useState, Suspense } from "react";
import { container } from "./three.module.scss";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import {
    Box,
    Plane,
    ScrollControls,
    PerspectiveCamera,
    useScroll,
    Sky,
    Cloud, Stars,
} from "@react-three/drei";
import Ocean from "./threejs/ocean";

// function BoxF(props) {
//     const ref = useRef()
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//
//     useFrame(({ camera }) => {
//         ref.current.makeEmpty();
//     });
//     return (
//         <mesh
//             {...props}
//             ref={ref}
//             rotation={[0, 10, 10]}
//             // scale={clicked ? 1.5 : 1}
//             // onClick={(event) => click(!clicked)}
//             // onPointerOver={(event) => hover(true)}
//             // onPointerOut={(event) => hover(false)}
//             >
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }

// function Plane(props) {
//   const ref = useRef();
//
//   useThree(({ camera }) => {
//     camera.rotation.set(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   });
//
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       // scale={clicked ? 1.5 : 1}
//       // onClick={(event) => click(!clicked)}
//       // onPointerOver={(event) => hover(true)}
//       // onPointerOut={(event) => hover(false)}
//     >
//       <planeGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"orange"} />
//       <perspectiveCamera
//         ref={ref}
//         aspect={1200 / 600}
//         radius={(1200 + 600) / 4}
//         fov={45}
//         position={[0, 0, -2]}
//         onUpdate={(self) => self.updateProjectionMatrix()}
//       />
//     </mesh>
//   );
// }

const Composition = () => {
  const scroll = useScroll();
  const initialX = 0;
  const initialY = 5;
  const initialZ = 100;

  useFrame((state) => {
    state.camera.position.z = initialZ - scroll.scroll.current * 100;
    state.camera.position.y = initialY + scroll.scroll.current * 1000;

    // state.camera.lookAt(initialX, initialY, initialZ + (scroll.scroll.current));
  });

  return (
    <>
      {/*<BoxF position={[-1.2, 0, 0]} />*/}
      {/*<Plane position={[1.2, 0, 0]} />*/}
      {/*<Box rotation={[10, 10, 10]} args={[1, 1, 1]} position={[-1.2, 0, 0]} >*/}
      {/*  <meshStandardMaterial attach="material" color="orange" />*/}
      {/*</Box>*/}

      {/*<Box args={[1, 1, 1]} position={[0, 15, 90]} rotation={[10, 10, 10]}>*/}
      {/*  <meshStandardMaterial attach="material" color="orange" />*/}
      {/*</Box>*/}

      {/*<Plane*/}
      {/*  args={[200, 200]}*/}
      {/*  position={[0, 0, 0]}*/}
      {/*  rotation={[-Math.PI / 2.1, 0, 0]}*/}
      {/*>*/}
      {/*  <meshStandardMaterial attach="material" color="orange" />*/}
      {/*</Plane>*/}
      <Suspense fallback={null}>
        <Cloud position={[0, 15, 90]} args={[3, 2]} />
        <Cloud position={[-4, -2, 0]} args={[3, 2]} />
        <Cloud position={[-4, 2, 0]} args={[3, 2]} />
        <Cloud args={[3, 2]} />
        <Cloud position={[4, -2, 0]} args={[3, 2]} />
        <Cloud position={[4, 2, 0]} args={[3, 2]} />
        <Ocean />
      </Suspense>
      <Sky
        scale={1000}
        sunPosition={[0, 5, -1000]}
        turbidity={8}
        mieDirectionalG={0.8}
        mieCoefficient={0.005}
        rayleigh={6}
        inclination={0.49}
        azimuth={0.25}
      />
        {/*<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />*/}
      {/*<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />*/}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    </>
  );
};

const Three = () => {
  return (
    <div className={container}>
      <Canvas
        camera={{
          position: [0, 5, 10],
          // , fov: 55, near: 1, far: 20000
        }}
      >
        <ScrollControls
          pages={3} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={4} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
        >
          <Composition />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Three;
