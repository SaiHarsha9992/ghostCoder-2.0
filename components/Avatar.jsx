import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Avatar(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/ghostCoder-opt.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

useEffect(() => {
  const availableActions = Object.values(actions);
  if (availableActions.length > 0) {
    const first = availableActions[1];
    
    first.reset().fadeIn(0.5).play();
    first.reset().fadeIn(0.5).paused = true;

    return () => {
      first.fadeOut(0.5);
    };
  }
}, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[-1.325, -0.257, 1.798]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="ghostobjcleanermaterialmergergles" />
        </group>
        <group name="Sketchfab_model001" position={[-0.098, 12.438, -1.04]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="ghostobjcleanermaterialmergergles001" />
        </group>
        <group name="Armature" position={[-0.394, -0.01, -0.557]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh geometry={nodes.Object_11.geometry} material={materials['PONCHO.001']} skeleton={nodes.Object_11.skeleton} />
          <skinnedMesh geometry={nodes.Object_5.geometry} material={materials['eyes.001']} skeleton={nodes.Object_5.skeleton} />
          <skinnedMesh geometry={nodes.Object_5001.geometry} material={materials['eyes.001']} skeleton={nodes.Object_5001.skeleton} />
          <skinnedMesh geometry={nodes.Object_6.geometry} material={materials['mask.001']} skeleton={nodes.Object_6.skeleton} />
          <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.body} skeleton={nodes.Object_8.skeleton} />
          <skinnedMesh geometry={nodes.Object_9.geometry} material={materials['body.001']} skeleton={nodes.Object_9.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ghostCoder-opt.glb')
