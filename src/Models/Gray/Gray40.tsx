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

export default function Gray40(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/40/result-transformed.glb",
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.nodes0.geometry} material={materials.material}>
        <meshPhongMaterial color={"gray"} />
      </mesh>

      <mesh geometry={nodes.nodes16.geometry} material={materials.material}>
        <meshPhongMaterial color={"gray"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/40/result-transformed.glb");
