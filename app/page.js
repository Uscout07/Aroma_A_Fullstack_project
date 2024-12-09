'use client';
import { useEffect } from "react";
import Home from "./Home/page.jsx";
import Fragrances from "./Components/Fragrances.jsx";
import Scroll from "./Components/Scroll.jsx";
import Last from "./Components/Last.jsx";
import Footer from "./Components/Footer.jsx";
import Lenis from "lenis";




export default function page() {
  useEffect(()=>{
    // Initialize Lenis
const lenis = new Lenis({
  gestureIgnore: [document.querySelector("nav")], // Exclude navbar from Lenis
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
});

  return (
   <>
    <div className="w-screen overflow-x-hidden maindiv z-0" id='root'>
      <Home/>
      <Fragrances/>
      <Scroll/>
      <Last/>
      <Footer/>
    </div>
    </>
  )
}
