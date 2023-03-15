import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Hero, Navbar } from "../components";
import Offer from "../components/Offer";
import HowWeTeach from "../components/FirstLesson";
import FirstLesson from "../components/FirstLesson";
import HowItWorks from "../components/HowItWorks";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Courses from "../components/Courses";

import { motion, useScroll, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // const { user, token, logoutUser } = useAppContext();

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/v1");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray("section");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component} className="container-wrapper">
      <Navbar />
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

      <div className="container" ref={slider}>
        <Hero3 />
        <Courses />
        <Hero3 />
      </div>
    </div>
  );
}
