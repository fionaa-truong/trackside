import About from "@/components/landingPage/about";
import TrackList from "@/components/landingPage/trackList";
import Features from "@/components/landingPage/features";
import CurrentInfo from "@/components/landingPage/currentInfo";
import RacesCompleted from "@/components/landingPage/racesCompleted";
import DistanceCompleted from "@/components/landingPage/distanceCompleted";
import LapsCompleted from "@/components/landingPage/lapsCompleted";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-8">
      <About />
      <div className="flex flex-col">
        <TrackList />
        <CurrentInfo />
      </div>
      <div className="grid grid-cols-3 gap-16">
        <RacesCompleted />
        <DistanceCompleted />
        <LapsCompleted />
      </div>
      <Features />
    </main>
  );
}
