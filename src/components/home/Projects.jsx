import React, { useRef } from "react";
import { HeroParallax } from "../ui/hero-parallax";
import bantik from "../../assets/projects/bantik.png";
import evoacademy from "../../assets/projects/evoacademy.png";
import coffeeme from "../../assets/projects/coffeeme.png";
import ddw from "../../assets/projects/ddw.png";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create scroll-driven transforms
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const projects = [
    // {
    //   title: "Aceternity UI",
    //   link: "https://ui.aceternity.com",
    //   thumbnail:
    //     "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    // },
    {
      title: "Evo Academy",
      link: "https://www.evoacademy.az",
      thumbnail: evoacademy,
    },
    {
      title: "Digital Diagnostics World",
      link: "https://editrix.ai",
      thumbnail: ddw,
    },
    // {
    //   title: "Algochurn",
    //   link: "https://algochurn.com",
    //   thumbnail:
    //     "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    // },
    {
      title: "Coffeeme",
      link: "https://coffeeme.az",
      thumbnail: coffeeme,
    },
    {
      title: "Bantik",
      link: "https://gomoonbeam.com",
      thumbnail: bantik,
    },
    // {
    //   title: "SmartBridge",
    //   link: "https://smartbridgetech.com",
    //   thumbnail:
    //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    // },
  ];

  return (
    <motion.main
      ref={ref}
      className="projects mx-auto"
      style={{
        opacity,
        scale,
      }}
    >
      <HeroParallax products={projects} />
    </motion.main>
  );
};

export default Projects;
