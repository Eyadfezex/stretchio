"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { cn } from "@nextui-org/theme";
import element from "@/public/heroElement.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import React, { useMemo, useState } from "react";
import emailjs from "emailjs-com";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const isEmailInvalid = useMemo(() => {
    if (email === "") return false; // Skip validation for empty input
    return !validateEmail(email);
  }, [email]);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    // Send email using EmailJS
    emailjs
      .send(
        "service_yeeg3dw", // Replace with your EmailJS Service ID
        "template_ighkig8", // Replace with your EmailJS Template ID
        {
          user_email: email, // Match the template field
        },
        "SA-bRx_g9vm1yU7U-" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setLoading(false);
          setEmail(""); // Clear the input
          setSuccess("Thank you for subscribing!");
        },
        (error) => {
          setLoading(false);
          setError("Failed to subscribe. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="relative">
      <Image
        src={element}
        alt="shape"
        className="absolute top-[10%] md:-left-4 w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]"
      />
      <div className="flex justify-center relative pt-10">
        <div className="flex flex-col md:flex-row gap-5 items-center lg:justify-between md:items-start lg:items-center w-full px-4 md:w-[95%] lg:w-[90%] max-w-[1920px]">
          <div className="flex flex-col gap-7 md:w-[80%] lg:max-w-[500px]">
            <div>
              <h1 className="text-4xl gradient_text  font-semibold lg:text-6xl">
                Revolutionize Your Workday Wellness{" "}
              </h1>
              <p className="leading-4 mt-4 lg:text-lg">
                Transform your office routine with Stretchio, the ultimate
                wellness platform designed for desk workers. Say goodbye to
                stiffness, burnout, and unproductive days with our smart
                reminders, guided stretches, and personalized wellness routines.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">
                Sign up to get notified when we launch
              </h2>
              <form onSubmit={handleSubmit}>
                <Input
                  className="mt-2"
                  placeholder="Enter your email"
                  color={isEmailInvalid ? "danger" : "default"}
                  value={email}
                  isInvalid={isEmailInvalid}
                  onChange={handleEmailChange}
                  classNames={{
                    inputWrapper: cn("bg-white border py-5"),
                  }}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {success && (
                  <p className="text-green-500 text-sm mt-2">{success}</p>
                )}
                <Button
                  type="submit"
                  color="primary"
                  className="w-full mt-3 items-center flex"
                  disabled={loading || isEmailInvalid}
                >
                  {loading ? (
                    <span className="text-white">Loading...</span>
                  ) : (
                    <span className="text-white">Notify me</span>
                  )}
                  <IoIosArrowForward />
                </Button>
              </form>
            </div>
          </div>
          <div className="relative w-full h-[20rem] xl:h-[40rem] md:h-full rounded-2xl overflow-hidden lg:h-[35rem] xl:max-w-[700px] lg:max-w-[500px]">
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
