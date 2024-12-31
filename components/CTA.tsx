"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Reveal from "./ui/Reveal";
import img from "@/public/imgs/mockup.png";
import Image from "next/image";
const getPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};
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

const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="lg:sticky top-0 flex py-[8rem] justify-center  border-t border-t-zinc-500 bg-black"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20  px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]">
        <span className="text-[164px] lg:text-[170px] leading-none font-semibold text-primary">
          1
        </span>
        <div className="max-w-[450px] lg:max-w-[600px]">
          <h2 className="text-5xl font-semibold lg:text-7xl">
            {getPath() === "/ar" ? "أبدء صح" : "Start Stretching"}
          </h2>
          <div className="relative w-full max-w-[440px] mt-6 h-[290px] rounded-xl overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img}
              alt="cta"
              className=" absolute w-full h-full object-cover "
            />
          </div>
          <p className="text-lg  text-default-400 font-semibold mt-4 lg:text-xl max-w-md">
            {getPath() === "/ar" ? (
              <span>
                خلي مكتبك مكان صحي مع تمارين بسيطة وسريعة تريح وجع الشغل
                المكتبي. مش محتاج أي معدات خالص
              </span>
            ) : (
              <span>
                Join Stretchio and improve your day with simple, guided
                stretches designed to keep you energized and healthy at work.
              </span>
            )}
          </p>
          <Link href="#">
            <Button className="bg-black text-white mt-3 lg:mt-8  border border-default-500 py-[10px] font-semibold text-lg px-6">
              {getPath() === "/ar" ? "يلا نبدأ" : "Get Started"}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const opacity = useTransform(scrollYProgress, [0, 1], [2, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="lg:sticky top-0 flex  py-[8rem] justify-center  border-t border-t-zinc-500 bg-black"
    >
      <div className="flex flex-col items-end lg:items-start text-end lg:text-start lg:flex-row-reverse lg:justify-between gap-20  px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]">
        <span className="text-[164px] lg:text-[170px] leading-none font-semibold text-primary">
          2
        </span>
        <div className="max-w-[450px] lg:max-w-[600px]">
          <h2 className="text-5xl font-semibold lg:text-7xl">
            {getPath() === "/ar" ? "اتحرك أكتر" : "Stay Active"}
          </h2>
          <div className="relative w-full max-w-[440px] mt-6 h-[290px] rounded-xl overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img}
              alt="cta"
              className=" absolute w-full h-full object-cover "
            />
          </div>
          <p className="text-lg  text-default-400 font-semibold mt-4 lg:text-xl max-w-md">
            {getPath() === "/ar" ? (
              <span>
                تعبان من كتر القعدة؟ معانا هتعرف تتحرك بسهولة في أي وقت - حتى
                وانت في ميتنج أو يوم زحمة
              </span>
            ) : (
              <span>
                Follow our tailored stretching guides to combat fatigue and
                boost your productivity, all while sitting at your desk.
              </span>
            )}
          </p>
          <Link href="#">
            <Button className="bg-black text-white mt-3 lg:mt-8  border border-default-500 py-[10px] font-semibold text-lg px-6">
              {getPath() === "/ar" ? "أعرف أكتر" : "Learn More"}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const Section3 = () => {
  return (
    <motion.div className="sticky flex py-[8rem] justify-center  border-t border-t-zinc-500 bg-primary text-black">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20  px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]">
        <span className="text-[164px] lg:text-[170px] leading-none font-semibold">
          3
        </span>
        <div className="max-w-[450px] lg:max-w-[600px]">
          <h2 className="text-5xl font-semibold lg:text-7xl">
            {getPath() === "/ar" ? "عيش أحسن" : "Feel Better"}
          </h2>
          <div className="relative w-full max-w-[440px] mt-6 h-[290px] rounded-xl overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={img}
              alt="cta"
              className=" absolute w-full h-full object-cover"
            />
          </div>
          <p
            className="text-lg  text-black font-semibold mt-4 lg:text-xl 
max-w-md"
          >
            {getPath() === "/ar" ? (
              <span>
                هتشوف الفرق بنفسك: قوام مظبوط، راحة من الوجع، أقل توتر، وطاقة
                طول اليوم
              </span>
            ) : (
              <span>
                Discover the benefits of regular stretching with Stretchio
                better posture, reduced stress, and a healthier lifestyle.
              </span>
            )}
          </p>
          <Link href="#">
            <Button className="bg-primary capitalize text-black mt-3 lg:mt-8  border border-black py-[10px] font-semibold text-lg px-6">
              {getPath() === "/ar" ? "أنضم دلوقتي" : "Join Now"}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Reveal(CTA);
