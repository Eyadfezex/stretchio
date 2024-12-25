"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./ui/Reveal";
const CTA = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {}, []);
  return (
    <section className="relative" ref={container}>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 />
    </section>
  );
};

const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="sticky top-0 flex py-[8rem] justify-center max-h-screen border-t border-t-zinc-500 bg-black"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20  px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]">
        <span className="text-[164px] lg:text-[170px] leading-none font-semibold text-primary">
          1
        </span>
        <div className="max-w-[450px] lg:max-w-[600px]">
          <h2 className="text-5xl font-semibold lg:text-7xl">Start remixing</h2>
          <div className="relative w-full max-w-[440px] mt-6 h-[290px] rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="cta"
              className=" absolute w-full h-full object-cover "
            />
          </div>
          <p className="text-lg  text-default-400 font-semibold mt-4 lg:text-xl max-w-md">
            Purchase Vertex and get a head start with ready-made layouts and
            thoughtful pages designed for SaaS and AI ventures.
          </p>
          <Link href="#">
            <Button className="bg-black text-white mt-3 lg:mt-8  border border-default-500 py-[10px] font-semibold text-lg px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const opacity = useTransform(scrollYProgress, [0, 1], [2, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="sticky top-0 flex py-[8rem] justify-center max-h-screen border-t border-t-zinc-500 bg-black"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20  px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]">
        <span className="text-[164px] lg:text-[170px] leading-none font-semibold text-primary">
          2
        </span>
        <div className="max-w-[450px] lg:max-w-[600px]">
          <h2 className="text-5xl font-semibold lg:text-7xl">Start remixing</h2>
          <div className="relative w-full max-w-[440px] mt-6 h-[290px] rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="cta"
              className=" absolute w-full h-full object-cover "
            />
          </div>
          <p className="text-lg  text-default-400 font-semibold mt-4 lg:text-xl max-w-md">
            Purchase Vertex and get a head start with ready-made layouts and
            thoughtful pages designed for SaaS and AI ventures.
          </p>
          <Link href="#">
            <Button className="bg-black text-white mt-3 lg:mt-8  border border-default-500 py-[10px] font-semibold text-lg px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const Section3 = () => {
  return (
    <motion.div className="sticky flex py-[8rem] justify-center max-h-screen border-t border-t-zinc-500 bg-primary text-black">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20  px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]">
        <span className="text-[164px] lg:text-[170px] leading-none font-semibold">
          3
        </span>
        <div className="max-w-[450px] lg:max-w-[600px]">
          <h2 className="text-5xl font-semibold lg:text-7xl">Start remixing</h2>
          <div className="relative w-full max-w-[440px] mt-6 h-[290px] rounded-xl overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="cta"
              className=" absolute w-full h-full object-cover "
            />
          </div>
          <p
            className="text-lg  text-black font-semibold mt-4 lg:text-xl 
max-w-md"
          >
            Purchase Vertex and get a head start with ready-made layouts and
            thoughtful pages designed for SaaS and AI ventures.
          </p>
          <Link href="#">
            <Button className="bg-primary text-black mt-3 lg:mt-8  border border-black py-[10px] font-semibold text-lg px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Reveal(CTA);
