"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lavendar from "../Components/Viewer3d";
import { BRDF_GGX } from "three/webgpu";


export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const SimpleTl = gsap.timeline();
        SimpleTl.from('.intro',{
          scale: 3,
          opacity: 0,
          duration: 1,
          ease: "power1.in",
        });
   
    // Create a timeline to sequence animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "center center",
        end: "center+=5",
        scrub: true,
      },
    });
    
    // Add animations to the timeline
    tl.from(".About", {
      x: "100%", // Start from far right
      opacity: 0, // Start invisible
      duration: 2,
      delay: 1.5, // Shorter duration
      ease: "power3.out",
    }).from(".About-para", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
    });
    
  }, []);

  return (
    <>
      <div className="z-10">
        <Lavendar/>
        
        <div className="w-full z-0 relative h-auto text-center bg-[#E9D5FF] flex flex-col justify-center">
          <div className="home">
          <div className="h-screen flex flex-col items-left justify-end md:items-center md:justify-center"> 
          <h5 className="max-md:hidden intro hero-text max-md:text-[3.2vh] lg:text-[8vh] xl:text-[10vh] p-20 h-screen leading-relaxed font-bold text-[#501c94] tracking-wide">
            Simplicity Meets Sophistication.
            <br />
            Simplicity Meets Sophistication.
            <br />
            Simplicity Meets Sophistication.
            <br />
            Simplicity Meets Sophistication.
            <br />
            Simplicity Meets Sophistication.
          </h5>
          <h5 className="md:hidden flex w-full text-[4vh] font-bold float-end">
            SIMPLICITY<br/>
            MEETS<br/>
            SOPHISTICATION<br/>
          </h5>
          </div>
          <div className="md:h-screen h-auto md:mt-10">
            <h2 id='About' className="About z-30 text-9xl mb-20 font-bold text-[#501c94] top-[50%] left-[50%] translate-x-[10%] bottom-10 max-md:text-5xl">
              Our Story
            </h2>
            <p className="About-para md:w-[90vh] w-[75%] top-[30%] pb-10 left-0 max-md:text-xs  max-md:text-left translate-x-[20%] text-left text-[#2c0f52]">
              Born in the heart of Italy, *Aroma* was founded with a singular
              vision: to redefine the art of scent and elevate it to a new level
              of sophistication. Drawing inspiration from Italy's rich heritage
              of craftsmanship and artistry, our brand is a celebration of
              timeless elegance and luxury. Every fragrance is meticulously
              crafted with the finest, hand-picked ingredients sourced from
              nature's most exquisite offerings. We fuse these elements with
              minimalist design, creating scents that are as refined as they are
              unforgettable. At *Aroma*, we believe fragrance is more than just
              a scent—it is a personal experience, a reflection of one's
              essence. Each bottle we create encapsulates a journey, carefully
              designed to evoke emotions and memories. From the initial spray to
              the lingering notes, our fragrances offer a multi-layered sensory
              experience that is both delicate and powerful. Every detail, from
              the design of our packaging to the selection of ingredients, is
              curated with utmost care. We strive for a perfect balance between
              luxury and simplicity, creating perfumes that are both timeless
              and contemporary. At the heart of *Aroma* is a commitment to
              quality, artistry, and sustainability, ensuring that each
              fragrance not only enhances your presence but also reflects our
              dedication to the world around us. Aroma's creations are not just
              about what you wear, but how you feel. With each scent, we invite
              you to indulge in an experience that is both personal and
              captivating, leaving a subtle yet lasting impression wherever you
              go. From the first note to the final trail, we craft fragrances
              that resonate deeply, making every moment unforgettable.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}