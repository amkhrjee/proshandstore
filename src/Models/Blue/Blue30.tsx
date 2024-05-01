import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    nodes0: THREE.Mesh;
    nodes16: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
  };
};

export default function Blue30(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/30/result-transformed.glb",
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.nodes0.geometry} material={materials.material}>
        <meshPhongMaterial color={"skyblue"} />
      </mesh>

      <mesh geometry={nodes.nodes16.geometry} material={materials.material}>
        <meshPhongMaterial color={"skyblue"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/30/result-transformed.glb");
