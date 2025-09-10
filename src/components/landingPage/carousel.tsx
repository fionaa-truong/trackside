"use client";

import { useRef, useState } from "react";
import CarouselCards from "./carouselCards";
import Image from "next/image";
import { motion } from "motion/react";

const cards = [
  {
    imgSr: "/landingPage/driver_trophy.png",
    link: "/",
    feature: "Drivers Standings →",
    hoverText: "See who is leading the driver's championship!",
  },
  {
    imgSrc: "/landingPage/constructors_trophy.jpg",
    link: "/",
    feature: "Constructors Standings →",
    hoverText: "See who is leading the constructor's championship!",
  },
  {
    imgSrc: "/landingPage/driver_trophy.png",
    link: "/",
    feature: "Projections →",
    hoverText: "View race outcome projections for the upcoming race!",
  },
  {
    imgSrc: "/landingPage/driver_trophy.png",
    link: "/",
    feature: "Circuit Info →",
    hoverText: "Curious about the track location and temperature? Click here!",
  },
  {
    imgSrc: "/landingPage/driver_trophy.png",
    link: "/",
    feature: "Upcoming Races →",
    hoverText: "View upcoming races",
  },
  {
    imgSrc: "/landingPage/driver_trophy.png",
    link: "/",
    feature: "Learn More →",
    hoverText: "New to the F1 community? Learn more here.",
  },
];

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-8 flex flex-row gap-10">
      <Image
        src="/svgs/arrow.svg"
        alt="Left arrow"
        width={30}
        height={30}
        className="transition ease-in-out hover:scale-110"
      />
      <CarouselCards
        imgSrc="/landingPage/driver_trophy.png"
        link="/"
        feature="Drivers Standings →"
        hoverText="See who is leading the driver's championship!"
      />
      <Image
        src="/svgs/arrow.svg"
        alt="Right arrow"
        width={30}
        height={30}
        className="rotate-180 transition ease-in-out hover:scale-110"
      />
    </div>
  );
}
