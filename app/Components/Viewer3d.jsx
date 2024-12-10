"use client";

import React, { useRef, useEffect } from "react";
import { Environment, SoftShadows, Float } from "@react-three/drei";
import { Lavender } from "./Lavender";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@uidotdev/usehooks";

const RotatingLavender = () => {
  const meshRef = useRef(null);
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const home = document.querySelector(".intro");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: home, // Ensure the ID matches your trigger element
        start: "top+=10",
        end: "bottom+=20r",
        scrub: true,
      },
    });

    // Animate rotation directly
    tl.to(meshRef.current.rotation, {
      y: Math.PI / 8,
      ease: "power1.out",
      duration: 3,
    });
  }, []);

  return (
    <mesh ref={meshRef} scale={1.05}>
       <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      > 
        <Lavender />
      </Float>
    </mesh>
  );
};

const Lavendar = (props) => {
  const canvasRef = useRef(null);
  const canvasDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const canvasDiv = canvasDivRef.current;

      if (canvasDiv) {
        if (scrollY > window.innerHeight * 2) {
          canvasDiv.style.position = "absolute";
          canvasDiv.style.top = `${window.innerHeight * 2.5}px`;
        } else {
          canvasDiv.style.position = "fixed";
          canvasDiv.style.top = "50%";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const home = document.querySelector(".home");
      const SimpleTl = gsap.timeline();
      SimpleTl.from(canvasRef.current, {
        scale: 3,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power1.in",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: home,
          start: "top+=2",
          end: "center-=5",
          scrub: 1,
        },
      });

      if (canvasRef.current) {
        tl.fromTo(
          canvasRef.current,
          { x: "0%" },
          {
            x: "-10%",
            opacity: 1,
            ease: "power1.out",
            duration: 1,
          }
        ).to(canvasRef.current, {
          x: "27%",
          scale: 1.2,
          opacity: 1,
          ease: "power1.out",
          duration: 1,
        });
      }
    }
  }, []);

  return (
    <div
      className="CanvasDiv fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 pointer-events-none h-screen w-screen"
      ref={canvasDivRef}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        className='max-md:hidden'
        ref={canvasRef}
      >
        <RotatingLavender />
        <SoftShadows />
        <Environment
          files={"./assets/HDR-file/light.hdr"}
          environmentIntensity={0.5}
        />
      </Canvas>
    </div>
  );
};


export default Lavendar;
