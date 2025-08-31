import FeatureCards from "./featureCards";

export default function Features() {
  return (
    <div className="mb-8 grid grid-cols-3 gap-16">
      <FeatureCards
        imgSrc="/landingPage/driver_trophy.png"
        link="/"
        feature="Drivers Standings →"
        hoverText="See who is leading the driver's championship!"
      />
      <FeatureCards
        imgSrc="/landingPage/constructors_trophy.jpg"
        link="/"
        feature="Constructors Standings →"
        hoverText="See who is leading the constructor's championship!"
      />
      <FeatureCards
        imgSrc="/landingPage/driver_trophy.png"
        link="/"
        feature="Projections →"
        hoverText="View race outcome projections for the upcoming race!"
      />
      <FeatureCards
        imgSrc="/landingPage/driver_trophy.png"
        link="/"
        feature="Circuit Info →"
        hoverText="Curious about the track location and temperature? Click here!"
      />
      <FeatureCards
        imgSrc="/landingPage/driver_trophy.png"
        link="/"
        feature="Upcoming Races →"
        hoverText="View upcoming races"
      />
      <FeatureCards
        imgSrc="/landingPage/driver_trophy.png"
        link="/"
        feature="Learn More →"
        hoverText="New to the F1 community? Learn more here."
      />
    </div>
  );
}
