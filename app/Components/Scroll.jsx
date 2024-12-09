"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Scroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ScrollTextWrap = document.querySelector(".ScrollTextWrap");
    const Maindiv = document.querySelector(".maindiv");
    const CitrusDiv = document.querySelector(".CitrusDiv")
    function ScrollAmount() {
      let ScrollTextWrapWidth = ScrollTextWrap.scrollWidth;
      return -(ScrollTextWrapWidth - window.innerWidth);
    }
    const ScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".Scrolldiv",
        start: "top 20%",
        end: () => `+=${ScrollAmount() * -1}`,
        scrub: true,
        pin:true,
        invalidateOnRefresh:true,
      },
    });
    
    ScrollTL.to(ScrollTextWrap, {
        x: ScrollAmount(),
        duration:3,
    });
    const MainBackgroundTl = gsap.timeline({
        scrollTrigger: {
            trigger: CitrusDiv,
            start: "top",
            end: "top",
            scrub: true,
          }, 
    });
    MainBackgroundTl.to(Maindiv, {
        backgroundColor: '#fed7aa',
    })
    const colorTL = gsap.timeline({
      scrollTrigger: {
        trigger: CitrusDiv,
        start: "bottom+=25",
        end: "bottom+=25",
        duration:"3",
        scrub: true,
      },
    });

    colorTL
      .to(".Scrolldiv", {
        backgroundColor: "#d4b3ff",
      })
      .from(".ScrollText", {
        color: "#431407",
      })
      .from(".ScrollTextBg", {
        backgroundColor: "#431407",
      })
      .to(Maindiv, {
        backgroundColor:'#d4b3ff'
      });
      
  }, []);
  return (
      <div className="Scrolldiv bg-[#fed7aa] ScrollTextWrap w-[215%] md:h-[10vh] h-[50vh]">
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          Experience
        </h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          the
        </h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          essence
        </h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          of
        </h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          luxury.
        </h5>
        <h5 className="ScrollTextBg inline md:pl-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-white font-bold bg-purple-950">
          Aroma
        </h5>
        <h5 className="ScrollText inline pl-[4vh] text-[15vb] text-purple-950 font-bold"></h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          where
        </h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          elegance
        </h5>
        <h5 className="ScrollText inline px-[4vh] max-md:px-[1vh] max-md:text-[5vh] text-[15vb] text-purple-950 font-bold ">
          lingers
        </h5>
      </div>
     
  );
}
