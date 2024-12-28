"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

interface InfiniteMovingCardsProps {
  items: { quote: string; name: string }[];
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  maxWords?: number; // New prop to limit words
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  maxWords = 20, // Default max words
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Utility function to limit words
  const limitWords = (text: string, maxWords: number): string => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  useEffect(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );
    }
  }, [direction, speed]);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className={cn(
        "scroller relative z-20 max-w-screen-2xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        role="list"
        aria-label="Quotes scrolling list"
        className={cn(
          "flex min-w-full gap-4 py-4 w-max animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, i) => (
          <li
            key={i}
            className="card w-[300px] max-w-full rounded-2xl border-[1px] border-default-700 divide-y-2 md:w-[450px]"
          >
            <div className="px-4 py-4 flex flex-col justify-between h-[150px]">
              <span className="leading-[1.6] font-normal">
                {limitWords(item.quote, maxWords)}
              </span>
              <div className="flex flex-row items-center">
                <span className="leading-[1.6] font-semibold">{item.name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
