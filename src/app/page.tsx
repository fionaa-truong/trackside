import About from "@/components/landingPage/about";
import TrackList from "@/components/landingPage/trackList";
import Features from "@/components/landingPage/features";
import CurrentInfo from "@/components/landingPage/currentInfo";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-8">
      <About />
      <div className="flex flex-col">
        <TrackList />
        <CurrentInfo />
      </div>

      <Features />
    </main>
  );
}
