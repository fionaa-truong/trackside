import About from "@/components/landingPage/about";
import TrackList from "@/components/landingPage/trackList";
import Features from "@/components/landingPage/features";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-8">
      <About />
      <TrackList />
      <Features />
    </main>
  );
}
