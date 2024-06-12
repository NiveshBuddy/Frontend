"use client";
import React from "react";
import { StickyScroll } from "../Styles/sticky-scroll-reveal.tsx";

const content = [
  {
    title: "Build Custom Strategies",
    description:
      "Tailor your investment approach to match your unique financial goals and risk tolerance by crafting personalized strategiesTailor your investment approach to match your unique financial goals and risk tolerance by crafting personalized strategiesTailor your investment approach to match your unique financial goals and risk tolerance by crafting personalized strategiesTailor your investment approach to match your unique financial goals and risk tolerance by crafting personalized strategies",
    content: (
      <div className="h-full w-full flex items-center justify-center align-center text-black">
        <img
          src="https://res.cloudinary.com/dnrxsykwg/image/upload/v1713003004/cld-sample-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Backtest with Confidence",
    description:
      "Backtest your strategies with unwavering confidence using our robust tools and comprehensive insights.Backtest your strategies with unwavering confidence using our robust tools and comprehensive insights.Backtest your strategies with unwavering confidence using our robust tools and comprehensive insights.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dnrxsykwg/image/upload/v1713003004/cld-sample-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Access Finance Education",
    description:
      "Our platform provides access to educational resources, webinars, and tutorials to help you level up your trading game.Our platform provides access to educational resources, webinars, and tutorials to help you level up your trading game.Our platform provides access to educational resources, webinars, and tutorials to help you level up your trading game.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right, #fff, #000)] flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dnrxsykwg/image/upload/v1713003004/cld-sample-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Stay ahead of the Curve",
    description:
      "Embrace innovation, continuously learn new skills, and anticipate industry trends to stay competitive.Embrace innovation, continuously learn new skills, and anticipate industry trends to stay competitive.Embrace innovation, continuously learn new skills, and anticipate industry trends to stay competitive.Embrace innovation, continuously learn new skills, and anticipate industry trends to stay competitive.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#000, #000)] flex items-center justify-center text-white ">
        <img
          src="https://res.cloudinary.com/dnrxsykwg/image/upload/v1713003004/cld-sample-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
