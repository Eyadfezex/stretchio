"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { cn } from "@nextui-org/theme";
import element from "@/public/heroElement.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
const Hero = () => {
  return (
    <section className="relative">
      <Image
        src={element}
        alt="shape"
        className="absolute top-[10%] md:-left-4 w-[400px] md:w-[500px] lg:w-[600px] "
      />
      <div className="flex justify-center relative pt-10">
        <div className="flex flex-col md:flex-row gap-5 items-center lg:justify-center md:items-start lg:items-center w-full px-4 md:w-[95%] lg:w-[90%]">
          <div className="flex flex-col gap-7 md:w-[80%] lg:max-w-[500px]">
            <div>
              <h1 className="text-4xl gradient_text  font-semibold">
                Title Copy Goes Here Be Awesome
              </h1>
              <p className="leading-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div>
              <h2 className="font-semibold  ">
                Sign up to get notified when we launch
              </h2>
              <Input
                className="mt-2"
                placeholder="Enter your email"
                classNames={{
                  inputWrapper: cn("bg-white border py-5"),
                }}
              />
              <Button color="primary" className="w-full mt-3 items-center flex">
                <span className="text-white">Notify me</span>
                <IoIosArrowForward />
              </Button>
            </div>
          </div>
          <div className="relative w-full h-[20rem] md:h-full  rounded-2xl overflow-hidden lg:h-[35rem] lg:max-w-[500px]">
            <Image
              src="https://i.ibb.co/1LjWXkv/image-2024-11-28-062619874.webp"
              alt="image-fx"
              width={2000}
              height={2000}
              className="absolute w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
