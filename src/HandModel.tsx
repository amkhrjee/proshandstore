/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\HandModelGlTF.gltf --transform --types 
Files: .\HandModelGlTF.gltf [1.54MB] > C:\Users\aniru_sr6lha9\Downloads\Final Models\HandModelGlTF-transformed.glb [452.15KB] (71%)
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Palm_41: THREE.Mesh;
  };
  materials: {
    mat_0: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[];
};

// type ContextType = Record<
//   string,
//   React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
// >;

export default function HandModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/HandModelGlTF-transformed.glb",
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Palm_41.geometry}
        material={materials.mat_0}
        position={[0.253, 0.026, 0.03]}
        rotation={[3.14, -0.365, 2.998]}
        scale={15}
      >
        <meshPhongMaterial color={"gray"} />
      </mesh>
      {/* <meshPhongMaterial /> */}
    </group>
  );
}

useGLTF.preload("/HandModelGlTF-transformed.glb");