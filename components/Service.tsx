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

const getPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};
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
      className={`relative h-full inline-block p-5 w-full text-base text-white  rounded-lg overflow-hidden ${className}`}
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
        className="relative z-10 bg-opacity-20 h-full"
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
    <div className="border border-default-800 rounded-2xl max-h-[270px] min-w-[380px] max-w-[380px] group overflow-hidden">
      <SwipeShineEffect>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="p-3 rounded-lg border border-default-600 bg-default-800 w-fit">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mt-8">{header}</h3>
            <p className="mt-4 text-default-400 text-lg">{des}</p>
          </div>
          <Link
            href={url}
            className="mt-5 block group-hover:text-primary duration-300"
            aria-label={`Learn more about ${header}`}
          >
            {getPath() === "/ar" ? "اعرف أكتر" : "Learn more"}
          </Link>
        </div>
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
            {getPath() === "/ar"
              ? "المميزات اللى هتلاقيها عندنا"
              : "Complete suite of features"}
          </h2>
          <div className="flex flex-wrap justify-center  gap-6 max-w-7xl ">
            <Service
              icon={
                <IoMdNotifications
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header={getPath() === "/ar" ? "فكرني اتحرك" : "Smart Reminders"}
              des={
                getPath() === "/ar"
                  ? "تنبيهات في وقتها تفكرك تظبط قعدتك وتتحرك شوية"
                  : "Gentle notifications to maintain good posture and take movement breaks"
              }
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
              header={
                getPath() === "/ar" ? "برنامجك الخاص" : "Personalized Plans"
              }
              des={
                getPath() === "/ar"
                  ? "تمارين مخصصة على حسب تعبك ومواعيد عملك"
                  : "Customized routines based on your specific pain points and schedule"
              }
              url="#"
            />
            <Service
              icon={
                <IoStatsChart
                  className="text-primary"
                  size={24}
                  aria-hidden="true"
                />
              }
              header={getPath() === "/ar" ? "تمارين سهلة" : "Guided Sessions"}
              des={
                getPath() === "/ar"
                  ? "حركات بسيطة وفعالة تريحك من تعب المكتب"
                  : "Quick, effective stretches targeting common office-related tension points"
              }
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
              header={getPath() === "/ar" ? "تابع تقدمك" : "Progress Analytics"}
              des={
                getPath() === "/ar"
                  ? "شوف إزاي صحتك بتتحسن يوم ورا يوم"
                  : "Track your wellness journey and see how better movement improves your workday"
              }
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
              header={getPath() === "/ar" ? "شجع زمايلك" : "Team Wellness"}
              des={
                getPath() === "/ar"
                  ? "اعملوا تمارين مع بعض وحفزوا بعض تفضلوا نشيطين"
                  : "Build healthy habits together and motivate each other to stay active"
              }
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
              header={
                getPath() === "/ar" ? "خليك في المود" : "Peak Performance"
              }
              des={
                getPath() === "/ar"
                  ? "حافظ على طاقتك وتركيزك مع نصايح للأكل والحركة"
                  : "Maintain energy and focus with balanced nutrition and movement tips"
              }
              url="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reveal(Services);
