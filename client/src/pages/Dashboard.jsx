import { motion } from "framer-motion";

import Offer from "../components/Offer";
import Hero from "../components/Hero";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Courses from "../components/Courses";

import { useScroll, useSpring } from "framer-motion";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import NavbarMobile from "../components/NavbarMobile";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Navbar } from "../components";

gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 900,
    damping: 60,
    restDelta: 0.8,
  });
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
      <NavbarMobile />
      <div className="container relative" ref={slider}>
        <Hero />
        <Courses />
        <Pricing />
        <Offer />
        <Contact />
      </div>
    </div>
  );
}
