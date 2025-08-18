    import { Canvas } from "@react-three/fiber";
    import { OrbitControls, Box } from "@react-three/drei";

    export default function Cube3D() {
    return (
        <Canvas style={{ height: 300, width: 300 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box rotation={[10, 10, 0]}>
            <meshStandardMaterial color="orange" />
        </Box>
        <OrbitControls enableZoom={false} />
        </Canvas>
    );
    }
