"use client";

import { useState } from "react";
import CarouselCards from "./carouselCards";
import Image from "next/image";

const cards = [
  {
    imgSrc: "/landingPage/driver_trophy.png",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-row gap-10">
        <button onClick={prevCard} className="transition hover:scale-110">
          <Image
            src="/svgs/arrow.svg"
            alt="Left arrow"
            width={30}
            height={30}
            className="transition ease-in-out hover:scale-110"
          />
        </button>

        <CarouselCards
          imgSrc={cards[currentIndex].imgSrc}
          link={cards[currentIndex].link}
          feature={cards[currentIndex].feature}
          hoverText={cards[currentIndex].hoverText}
          prevImgSrc={cards[prevIndex].imgSrc}
          prevFeature={cards[prevIndex].feature}
          nextImgSrc={cards[nextIndex].imgSrc}
          nextFeature={cards[nextIndex].feature}
        />

        <button onClick={nextCard} className="transition hover:scale-110">
          <Image
            src="/svgs/arrow.svg"
            alt="Right arrow"
            width={30}
            height={30}
            className="rotate-180 transition ease-in-out hover:scale-110"
          />
        </button>
      </div>
      <div className="flex gap-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === currentIndex ? "scale-110 bg-ocean-blue" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
