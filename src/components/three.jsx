import * as React from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { container } from "./three.module.scss";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Box(props) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Plane(props) {
    const ref = useRef()

    const [map] = useLoader(TextureLoader, [
        '../images/avatar.jpeg',
    ])


    useThree(({camera}) => {
        camera.rotation.set(75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000);
    });

    return (
        <mesh
            {...props}
            ref={ref}
            map={map}
            // scale={clicked ? 1.5 : 1}
            // onClick={(event) => click(!clicked)}
            // onPointerOver={(event) => hover(true)}
            // onPointerOut={(event) => hover(false)}
            >
            <planeGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
            <perspectiveCamera
                ref={ref}
                aspect={1200 / 600}
                radius={(1200 + 600) / 4}
                fov={45}
                position={[0, 0, -2]}
                onUpdate={self => self.updateProjectionMatrix()}
            />
        </mesh>
    )
}

function UseFrame() {
    useFrame((state) => {
        state.camera.position.z = window.pageYOffset * 0.1;
        state.camera.updateProjectionMatrix()
    })
    return null
}

const Three = () => {
    // const ref = useRef()

  return (
    <div className={container}>
        <Canvas>
            <Box position={[-1.2, 0, 0]} />
            <Plane position={[1.2, 0, 0]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <UseFrame />
        </Canvas>
    </div>
  );
};

export default Three;
