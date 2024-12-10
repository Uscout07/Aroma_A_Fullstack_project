"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoseModel from "./Canvses/RoseModel";
import CitrusModel from "./Canvses/CitrusModel";
import CherryModel from "./Canvses/CherryModel";

export default function Fragrances() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const home = document.querySelector(".home");
    const tl = gsap.timeline();
    const Condition = gsap.matchMedia();
    const SlideClasses = [
      { Class: ".Slide", ScrollTrig: home },
      { Class: ".Rose-Media", ScrollTrig: ".LavenderDiv" },
      { Class: ".Cherry-Media", ScrollTrig: ".RoseDiv" },
      { Class: ".Citrus-Media", ScrollTrig: ".CherryDiv" },
    ];
    const DisClasses = [
      { Class: ".lavender-dis", ScrollTrig: home },
      { Class: ".rose-dis", ScrollTrig: ".LavenderDiv" },
      { Class: ".cherry-dis", ScrollTrig: ".RoseDiv" },
      { Class: ".citrus-dis", ScrollTrig: ".CherryDiv" },
    ];
    const BgClasses = [
      { Class: ".RoseDiv", ScrollTrig: ".LavenderDiv", bgColor: "#d4b3ff" },
      { Class: ".CherryDiv", ScrollTrig: ".RoseDiv", bgColor: "#fbcfe8" },
      { Class: ".CitrusDiv", ScrollTrig: ".CherryDiv", bgColor: "#FECACA" },
    ];
    Condition.add("min-width: 1024px", () => {
      SlideClasses.forEach(({ Class, ScrollTrig }) => {
        tl.from(Class, {
          y: "100%",
          x: "20%",
          duration: 4,
          opacity: 0.5,
          delay: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ScrollTrig,
            start: "center+=15",
            end: "bottom+=15",
            scrub: true,
          },
        });
      });
      DisClasses.forEach(({ Class, ScrollTrig }) => {
        tl.from(Class, {
          x: "-100%",
          duration: 4,
          opacity: 0.5,
          delay: 2,
          ease: "power1.out",
          stagger: 4,
          scrollTrigger: {
            trigger: ScrollTrig,
            start: "center+=15",
            end: "bottom+=15",
            scrub: true,
          },
        });
      });
    });

    BgClasses.forEach(({ Class, ScrollTrig, bgColor }) => {
      tl.from(Class, {
        backgroundColor: bgColor,
        scrollTrigger: {
          trigger: ScrollTrig,
          start: "center+=15",
          end: "bottom+=15",
          scrub: true,
        },
      });
    });

    tl.from(".inner-div", {
      y: "100%",
      duration: 1,
      opacity: 0.5,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: home,
        start: "center+=5",
        end: "bottom+=6",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="h-auto">
      <div className="LavenderDiv fragrance1 bg-[#d4b3ff] lg:h-[100vh] max-lg:flex flex-col">
        <div className="inner-div h-full">
          <div className="slide lg:h-full lg:w-1/2 h-1/2 w-full lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full lg:float-right bg-white flex items-center justify-center">
            <img
              src="./assets/Fragrances/lavender.png"
              className="h-[98%] w-[98%] object-fill lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full"
            />
          </div>
          <div className="lavender-dis lg:h-full lg:w-1/2 h-1/2 w-full flex flex-col p-10 items-start justify-start text-left">
            <h2 className="text-5xl text-purple-900 font-bold p-5">Lavender</h2>
            <p className="text-1xl text-purple-900 p-5 lg:pr-20 px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              nihil amet obcaecati, sapiente voluptatibus fuga laborum assumenda
              debitis corrupti beatae corporis. Exercitationem veniam harum fuga
              nam excepturi commodi totam? Libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque labore rem sequi eius veniam,
              fuga at ipsum reprehenderit. Placeat, cum? Recusandae, quisquam
              saepe? Quaerat ab voluptatum, hic omnis fugit quos. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Est, dolor. Ut odit
              quos alias laboriosam quidem id vero harum culpa possimus
              inventore autem enim, assumenda ullam modi amet cupiditate aut?
            </p>
            <h4 className="font-bold text-3xl text-purple-900 p-10 pl-15">
              $99
            </h4>
            <button className="w-36 h-10 bg-purple-900 text-white ml-6 mb-6 font-cinzel font-bold">
              BUY NOW
            </button>
            <button className="w-36 h-10 bg-white ml-6 font-cinzel font-bold text-purple-900">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="RoseDiv bg-pink-200 lg:h-[100vh] max-lg:flex flex-col-reverse">
        <div className="lg:h-full h-1/2 bg-[3D6EBC]">
          <div className="Rose-Media lg:h-full lg:w-1/2 h-1/2 w-full  lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full lg:float-right bg-white flex items-center justify-center">
            <div className="w-[50%] h-[100%] flex items-center justify-center absolute">
              <RoseModel />
            </div>
            <img
              src="./assets/Fragrances/rose.jpeg"
              className="h-[98%] w-[98%] object-fill lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full"
            />
          </div>
          <div className="rose-dis lg:h-full lg:w-1/2 h-1/2 w-full flex flex-col p-10 items-start justify-start text-left ">
            <h2 className="text-5xl text-pink-900 font-bold p-5">Rose</h2>
            <p className="lg:text-1xl text-[2vh] text-pink-900 p-5 lg:pr-20 px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              nihil amet obcaecati, sapiente voluptatibus fuga laborum assumenda
              debitis corrupti beatae corporis. Exercitationem veniam harum fuga
              nam excepturi commodi totam? Libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque labore rem sequi eius veniam,
              fuga at ipsum reprehenderit. Placeat, cum? Recusandae, quisquam
              saepe? Quaerat ab voluptatum, hic omnis fugit quos. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Est, dolor. Ut odit
              quos alias laboriosam quidem id vero harum culpa possimus
              inventore autem enim, assumenda ullam modi amet cupiditate aut?
            </p>
            <h4 className="font-bold text-3xl text-pink-900 p-10 pl-15">$99</h4>
            <button className="w-36 h-10 bg-pink-900 text-white ml-6 mb-6 font-cinzel font-bold">
              BUY NOW
            </button>
            <button className="w-36 h-10 bg-white ml-6 font-cinzel font-bold text-pink-950">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="CherryDiv bg-red-200 lg:h-[100vh] max-lg:flex flex-col">
        <div className="h-full bg-[3D6EBC]">
          <div className="Cherry-Media lg:h-full lg:w-1/2 h-1/2 w-full  lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full lg:float-right bg-white flex items-center justify-center">
            <div className="w-[50%] h-[100%] flex items-center justify-center absolute">
              <CherryModel />
            </div>
            <img
              src="./assets/Fragrances/cherry.jpeg"
              className="h-[98%] w-[98%] object-fill lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full"
            />
          </div>
          <div className="cherry-dis lg:h-full lg:w-1/2 h-1/2 w-full flex flex-col p-10 items-start justify-start text-left ">
            <h2 className="text-5xl text-red-900 font-bold p-5">Cherry</h2>
            <p className="text-1xl text-red-900 p-5 lg:pr-20 px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              nihil amet obcaecati, sapiente voluptatibus fuga laborum assumenda
              debitis corrupti beatae corporis. Exercitationem veniam harum fuga
              nam excepturi commodi totam? Libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque labore rem sequi eius veniam,
              fuga at ipsum reprehenderit. Placeat, cum? Recusandae, quisquam
              saepe? Quaerat ab voluptatum, hic omnis fugit quos. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Est, dolor. Ut odit
              quos alias laboriosam quidem id vero harum culpa possimus
              inventore autem enim, assumenda ullam modi amet cupiditate aut?
            </p>
            <h4 className="font-bold text-3xl text-red-900 p-10 pl-15">$99</h4>
            <button className="w-36 h-10 bg-red-900 text-white ml-6 mb-6 font-cinzel font-bold">
              BUY NOW
            </button>
            <button className="w-36 h-10 bg-white ml-6 font-cinzel font-bold text-red-950">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="CitrusDiv bg-orange-200 lg:h-[100vh] max-lg:flex flex-col">
        <div className="h-full bg-[3D6EBC]">
          <div className="Citrus-Media lg:h-full lg:w-1/2 h-1/2 w-full  lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full lg:float-right bg-white flex items-center justify-center">
            <div className="w-[50%] h-[100%] flex items-center justify-center absolute">
              <CitrusModel />
            </div>
            <img
              src="./assets/Fragrances/citrus.jpeg"
              className="h-[98%] w-[98%] object-fill lg:rounded-bl-full lg:rounded-tl-full max-lg:rounded-br-full max-lg:rounded-bl-full"
            />
          </div>
          <div className="citrus-dis lg:h-full lg:w-1/2 h-1/2 w-full flex flex-col p-10 items-start justify-start text-left ">
            <h2 className="text-5xl text-orange-900 font-bold p-5">Citrus</h2>
            <p className="text-1xl text-orange-900 p-5 lg:pr-20 px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              nihil amet obcaecati, sapiente voluptatibus fuga laborum assumenda
              debitis corrupti beatae corporis. Exercitationem veniam harum fuga
              nam excepturi commodi totam? Libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque labore rem sequi eius veniam,
              fuga at ipsum reprehenderit. Placeat, cum? Recusandae, quisquam
              saepe? Quaerat ab voluptatum, hic omnis fugit quos. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Est, dolor. Ut odit
              quos alias laboriosam quidem id vero harum culpa possimus
              inventore autem enim, assumenda ullam modi amet cupiditate aut?
            </p>
            <h4 className="font-bold text-3xl text-orange-900 p-10 pl-15">
              $99
            </h4>
            <button className="w-36 h-10 bg-orange-900 text-white ml-6 mb-6 font-cinzel font-bold">
              BUY NOW
            </button>
            <button className="w-36 h-10 bg-white ml-6 font-cinzel font-bold text-orange-950">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
