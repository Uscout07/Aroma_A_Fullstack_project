import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lavender(props) {
  const { nodes, materials } = useGLTF('/assets/3d-model/lavender.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.006, -1.618, -0.003]} scale={0.642}>
        <group position={[0, 2.17, 0]} scale={[1.27, 2.13, 1.38]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['outside.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials['inside.001']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials.TEXT}
          position={[-0.94, 3.11, 1.39]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials['TEXT.001']}
          position={[-1.29, 2.52, -0.98]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials['TEXT.002']}
          position={[-0.94, 0.54, 1.39]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.top}
          position={[0, 4.62, -0.07]}
          scale={[0.55, 0.38, 0.56]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials.TEXT}
          position={[-0.94, 1.86, 1.39]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}
