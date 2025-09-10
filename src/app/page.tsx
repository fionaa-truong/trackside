import About from "@/components/landingPage/about";
import TrackList from "@/components/landingPage/trackList";
import Carousel from "@/components/landingPage/carousel";
import CurrentInfo from "@/components/landingPage/currentInfo";
import RacesCompleted from "@/components/landingPage/racesCompleted";
import DistanceCompleted from "@/components/landingPage/distanceCompleted";
import LapsCompleted from "@/components/landingPage/lapsCompleted";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-8">
      <About />
      <div className="flex flex-col items-center">
        <TrackList />
        <CurrentInfo />
      </div>
      <div className="my-5 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5 lg:gap-16">
        <RacesCompleted />
        <DistanceCompleted />
        <LapsCompleted />
      </div>
      <Carousel />
    </main>
  );
}
