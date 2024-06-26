import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    nodes0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
  };
};

export default function Blue35(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/35/result-transformed.glb",
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.nodes0.geometry} material={materials.material}>
        <meshPhongMaterial color={"skyblue"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/35/result-transformed.glb");
