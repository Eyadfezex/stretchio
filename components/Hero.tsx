"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { cn } from "@nextui-org/theme";
import React, { useMemo, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const getPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  };

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
          user_message: `A new user with the email ${email} wants to be notified!`, // Example custom message
        },
        "SA-bRx_g9vm1yU7U-" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setLoading(false);
          setEmail(""); // Clear the input
          setSuccess(
            getPath() === "/ar"
              ? "شكرا لك على الاشتراك!"
              : "Thank you for subscribing!"
          );
        },
        (error) => {
          setLoading(false);
          setError(
            getPath() === "/ar" ? "" : "فشل الاشتراك. يرجى المحاولة مرة أخرى."
          );
          console.error(error.text);
        }
      );
  };

  return (
    <section className="relative">
      <div className="flex justify-center py-[4.5rem] lg:py-[6rem]">
        <motion.div
          animate={{ scale: 1, y: 0, opacity: 1 }}
          initial={{ scale: 0.9, y: 10, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-8 md:gap-10 px-4 md:px-6 w-full lg:w-[80%] max-w-[1920px]"
        >
          <div className="flex flex-col items-center gap-5 text-center w-full z-30 relative">
            <h1 className="bg-gradient-to-br  z-30 text-[10vw] lg:text-7xl leading-[10vw] md:leading-[5.5rem]  xl:text-8xl font-bold  from-white from-35%  to-primary inline-block text-transparent bg-clip-text  xl:leading-[6.7rem]">
              {getPath() === "/ar" ? (
                <span>
                  غيّر حياتك الصحية <br /> في مكتبك و من النهاردة
                </span>
              ) : (
                <span>
                  Revolutionize Your <br /> Workday Wellness
                </span>
              )}
            </h1>
            <span className="bg-gradient-to-r lg:mt-7 text-lg md:text-xl  xl:text-3xl font-light opacity-70   from-white from-20%  to-primary inline-block text-transparent bg-clip-text">
              {getPath() === "/ar" ? (
                <span>
                  كفاية وجع ظهر وتعب! مع ستريتشيو، هتعرف تحافظ على صحتك وانت
                  شغال - تمارين سهلة وسريعة تعملها وانت في مكانك.
                </span>
              ) : (
                <span>
                  Say goodbye to stiffness and burnout. Transform your workday
                  with Stretchio -- the ultimate wellness platform designed for
                  workers
                </span>
              )}
            </span>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative z-30 flex justify-center max-w-xs lg:max-w-xl w-full items-center gap-2"
          >
            <Input
              placeholder="example@email.com"
              value={email}
              onChange={handleEmailChange}
              className="max-w-[400px]"
              classNames={{
                inputWrapper: cn(
                  "!bg-primary !bg-opacity-30",
                  "border-2 md:py-6 md:px-5 border-primary rounded-full",
                  isEmailInvalid && "border-red-500" // Highlight invalid input
                ),
                input: cn("!text-white md:text-lg"),
              }}
            />
            <Button
              type="submit" // Button will now trigger the form submit
              disabled={loading || isEmailInvalid} // Disable button if loading or invalid email
              className="text-white px-6 lg:px-8 lg:text-base rounded-full bg-primary bg-opacity-60 border-2 md:h-full  border-primary"
            >
              {loading
                ? getPath() === "/ar"
                  ? "تقديم..."
                  : "Submitting..."
                : getPath() === "/ar"
                ? "ابعتلي لما تنزل"
                : "Notify me"}
            </Button>
          </form>

          {/* Error and Success Messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          {/* Image */}
          <motion.img
            animate={{ y: 0, opacity: 1, scale: 1 }}
            initial={{ y: 10, opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="relative z-30 mt-10"
            src="https://framerusercontent.com/images/FANTTGJ7A0DLz9sVx80LbdObvg.png?scale-down-to=2048"
            alt="train"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
