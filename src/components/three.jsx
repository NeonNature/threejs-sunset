import * as React from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { container } from "./three.module.scss";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  Box,
  Plane,
  ScrollControls,
  PerspectiveCamera,
  useScroll,
} from "@react-three/drei";

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

  useFrame((state) => {
    state.camera.position.z = 2 - scroll.scroll.current;
      // state.camera.fov = 1 + scroll.scroll.current;
    // state.camera.position.y = 1 + scroll.scroll.current;

      // if (scroll.scroll.current > 0.5) {
      //     state.camera.lookAt(0,1,0);
      // }
  });

  return (
    <>
      {/*<BoxF position={[-1.2, 0, 0]} />*/}
      {/*<Plane position={[1.2, 0, 0]} />*/}
      {/*<Box rotation={[10, 10, 10]} args={[1, 1, 1]} position={[-1.2, 0, 0]} >*/}
      {/*  <meshStandardMaterial attach="material" color="orange" />*/}
      {/*</Box>*/}
      <Box
        args={[1, 1, 1]}
        position={[0, 0, 0]}
        rotation={[10, 10, 10]}
      >
        <meshStandardMaterial attach="material" color="orange" />
      </Box>

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    </>
  );
};

const Three = () => {
  return (
    <div className={container}>
      <Canvas>
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
