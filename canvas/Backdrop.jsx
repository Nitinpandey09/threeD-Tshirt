import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows ,  RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  return (
<AccumulativeShadows
ref={shadows}
temporal
frames={60}
alphaTest={0.85}
scae={10}
rotation={[Math.PI / 2, 0, 0]}
position={[0,0,-0.11]}
>
  <RandomizedLight
  amount={3}
  radius={9}
  intensity={0.40}
  ambient={0.55}
  position={[-5,5,-9 ]}
  />
</AccumulativeShadows>
  )
}

export default Backdrop
