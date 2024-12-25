"use client";
import React from "react";
import mockUp from "@/public/imgs/mockup.png";
import Image from "next/image";
import Reveal from "./ui/Reveal";
const AboutUs = () => {
  return (
    <section>
      <div className="flex justify-center py-10">
        <div className="flex flex-col gap-[8rem] px-6 w-full lg:w-[80%] max-w-[1920px]">
          <h2 className="text-4xl lg:text-7xl font-bold bg-gradient-to-br from-white from-30% to-default-600 inline-block text-transparent bg-clip-text">
            The all-in-one solution
          </h2>
          <div className="flex items-center  gap-10 ">
            <div className="relative hidden h-[25rem] xl:h-[30rem] lg:w-[80%] xl:w-[40%] rounded-xl overflow-hidden lg:block">
              <Image
                src={mockUp}
                alt="mockup"
                width={1000}
                height={1000}
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="lg:max-w-sm xl:max-w-xl">
              <h3 className="text-lg lg:text-2xl font-semibold after:absolute after:bg-primary after:w-full w-fit after:h-[1px] after:top-[100%] after:left-0 relative ">
                About Us
              </h3>
              <p className="mt-5 lg:text-xl">
                Stretchio is designed to transform your office routine into a
                healthier and more dynamic experience. Our platform ensures you
                stay active throughout the day with tailored stretch reminders,
                guided exercises, and personalized wellness plans. We believe in
                empowering professionals to prioritize their health without
                compromising productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reveal(AboutUs);
