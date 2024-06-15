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
          src="https://res.cloudinary.com/dsu2kv8ym/image/upload/v1718447714/3-Divergence-3_nbi3vn.png"
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
          src="https://res.cloudinary.com/dsu2kv8ym/image/upload/v1718447713/610eb267dc792574f6217584_Screen_Shot_2021-08-07_at_12.10.22_PM-2_axlp6t.png"
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
          src="https://res.cloudinary.com/dsu2kv8ym/image/upload/v1718447714/f4d490b3f52cfbb171d09711ed2a6b3a_mev1uv.jpg"
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
          src="https://res.cloudinary.com/dsu2kv8ym/image/upload/v1718447713/competition-_cx1wa1.jpg"
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
