import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GridMesh = () => {
    const mesh = useRef();
    const material = useRef();

    // Uniforms for the shader
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uColor: { value: new THREE.Color(0x4F8CFF) }, // Accent color
        }),
        []
    );

    // Mouse movement handler attached to window in parent or canvas
    // We update the uniform in useFrame for smoothness
    useFrame((state) => {
        const { clock, pointer } = state;
        if (material.current) {
            material.current.uniforms.uTime.value = clock.getElapsedTime();
            // Pointer is normalized (-1 to 1), map to (0 to 1) for UV space calculations if needed,
            // or keep as is. Let's map to 0..1 for easier distance calc with UVs.
            material.current.uniforms.uMouse.value.set(
                (pointer.x + 1) / 2,
                (pointer.y + 1) / 2
            );
        }
    });

    // Vertex Shader: Ripple effect based on mouse distance
    const vertexShader = `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
            vUv = uv;
            vec3 pos = position;

            // Calculate distance from mouse to current vertex (in UV space approx)
            float dist = distance(uv, uMouse);

            // Create a decay factor so affect is localized
            float decay = clamp(1.0 - dist * 3.0, 0.0, 1.0);

            // Wave effect: specific frequency and speed, dampened by distance (decay)
            float ripple = sin(dist * 20.0 - uTime * 2.0) * 0.5 * decay;

            // Apply distortion to Z axis
            pos.z += ripple;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    // Fragment Shader: Grid lines
    const fragmentShader = `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;

        void main() {
            // Grid configuration
            float gridScale = 20.0;
            
            // Calculate grid lines
            vec2 grid = abs(fract(vUv * gridScale - 0.5) - 0.5) / fwidth(vUv * gridScale);
            float line = min(grid.x, grid.y);
            
            // Brightness/Thickness of lines
            float alpha = 1.0 - smoothstep(0.0, 1.0, line);
            
            // Fade out at edges to blend with background
            float distFromCenter = distance(vUv, vec2(0.5));
            float vignette = 1.0 - smoothstep(0.2, 0.8, distFromCenter);

            // Final color
            gl_FragColor = vec4(uColor, alpha * 0.4 * vignette);
        }
    `;

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
            {/* Wide plane to cover screen */}
            <planeGeometry args={[20, 20, 64, 64]} />
            <shaderMaterial
                ref={material}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

const InteractiveGrid = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true, antialias: true }}>
                <GridMesh />
            </Canvas>
        </div>
    );
};

export default InteractiveGrid;
