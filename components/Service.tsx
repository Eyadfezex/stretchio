"use client";
import "@/css/shine-effect.css";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { IoStatsChart } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

import Reveal from "./ui/Reveal";
import { MdPerson } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";
import { AiOutlineTeam } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";

interface SwipeShineEffectProps {
  children: React.ReactNode;
  className?: string;
  shineColor?: string;
  shineDuration?: number;
}

const SwipeShineEffect: React.FC<SwipeShineEffectProps> = ({
  children,
  className = "",
  shineColor = "rgba(255,255,255,0.25)",
  shineDuration = 0.8,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = async () => {
    if (!isAnimating) {
      setIsAnimating(true);
      await controls.start({ x: "100%" });
      setIsAnimating(false);
      controls.set({ x: "-100%" });
    }
  };

  return (
    <motion.div
      className={`relative inline-block p-5 text-base text-white  rounded-lg overflow-hidden ${className}`}
      onHoverStart={handleHoverStart}
      transition={{ duration: 0.2 }}
      role="button"
      aria-label="Swipe Shine Effect"
    >
      <motion.div
        className="absolute inset-0 bg-opacity-20"
        initial={{ x: "-100%" }}
        animate={controls}
        transition={{
          duration: shineDuration,
          ease: "easeIn",
        }}
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${shineColor} 50%, transparent 100%)`,
          width: "200%",
          zIndex: 1,
        }}
      />
      <motion.div
        className="relative z-10 bg-opacity-20"
        whileHover={{
          textShadow: "0 0 8px rgba(255,255,255,0.8)",
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

interface ServiceProps {
  header: string;
  des: string;
  url: string;
  icon?: React.ReactNode;
}

const Service: React.FC<ServiceProps> = ({ header, icon, des, url }) => {
  return (
    <div className="border border-default-800 rounded-2xl max-h-[270px] max-w-[340px] group overflow-hidden">
      <SwipeShineEffect>
        <div className="p-3 rounded-lg border border-default-600 bg-default-800 w-fit">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mt-8">{header}</h3>
        <p className="mt-4 text-default-400 text-lg">{des}</p>
        <Link
          href={url}
          className="mt-5 block group-hover:text-primary duration-300"
          aria-label={`Learn more about ${header}`}
        >
          Learn more
        </Link>
      </SwipeShineEffect>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section>
      <div className="flex justify-center py-[5rem]" id="Features">
        <div className="flex flex-col items-center px-4 w-full lg:w-[90%] max-w-[1920px] md:w-[95%] gap-5 md:gap-[4rem]">
          <h2 className="font-bold text-2xl text-center md:text-3xl lg:text-4xl xl:text-7xl bg-gradient-to-r from-gray-600 to-40% to-white inline-block text-transparent bg-clip-text">
            Complete suite <br /> of features
          </h2>
          <div className="flex flex-wrap justify-center  gap-6 max-w-7xl ">
            <Service
              icon={
                <IoStatsChart
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header="Guided Sessions"
              des="Expert-designed routines to ease tension."
              url="#"
            />
            <Service
              icon={
                <IoMdNotifications
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header="Smart Reminders"
              des="Timely nudges to stretch and recharge. "
              url="#"
            />
            <Service
              icon={
                <MdPerson
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header="Personalized Plans"
              des="Tailored to your work style and needs."
              url="#"
            />
            <Service
              icon={
                <HiRocketLaunch
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header="Boost Productivity"
              des="Stay focused, energized, and at your best"
              url="#"
            />
            <Service
              icon={
                <AiOutlineTeam
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header="Team Wellness"
              des="Build healthy habits together and celebrate shared success"
              url="#"
            />
            <Service
              icon={
                <CgPerformance
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header="Peak Performance"
              des="Boost focus, energy, and productivity throughout your day"
              url="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reveal(Services);
