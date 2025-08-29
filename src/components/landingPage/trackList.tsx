import Image from "next/image";
import Calendar from "./calendar";

// TODO: Add now playing for the current/next race

export default function TrackList() {
  return (
    <div className="bg-moody-grey flex h-80 w-[850px] flex-row rounded-lg">
      <div className="relative h-80 w-80">
        <Image
          src="/landingPage/senna_monaco.png"
          alt="Senna in Monaco"
          fill
          className="object-contain p-5"
        />
      </div>

      <div className="flex flex-1 flex-col items-center">
        <div className="mt-4 flex flex-row items-start justify-center gap-2">
          <Image
            src="/landingPage/f1_white_logo.png"
            alt="F1 Logo"
            width={90}
            height={90}
            className="object-contain"
          />
          <span className="mb-4 mt-2 text-3xl text-white">2025 Track List</span>
        </div>
        <div className="mb-6 overflow-auto">
          <Calendar
            trackNumber={1}
            circuit="Melbourne Grand Prix Circuit"
            location="Australia"
          />
          <Calendar
            trackNumber={2}
            circuit="Shanghai International Circuit"
            location="China"
          />
          <Calendar trackNumber={3} circuit="Suzuka Circuit" location="Japan" />
          <Calendar
            trackNumber={4}
            circuit="Bahrain International Circuit"
            location="Bahrain"
          />
          <Calendar
            trackNumber={5}
            circuit="Jeddah Corniche Circuit Circuit"
            location="Saudi Arabia"
          />
          <Calendar
            trackNumber={6}
            circuit="Miami International Autodrome"
            location="Unites States"
          />
          <Calendar
            trackNumber={7}
            circuit="Autodromo Enzo e Dino Ferrari"
            location="Italy"
          />
          <Calendar
            trackNumber={8}
            circuit="Circuit de Monaco"
            location="Monaco"
          />
          <Calendar
            trackNumber={9}
            circuit="Circuit de Barcelona-Catalunya"
            location="Spain"
          />
          <Calendar
            trackNumber={10}
            circuit="Circuit Gilles Villeneuve"
            location="Canada"
          />
          <Calendar
            trackNumber={11}
            circuit="Red Bull Ring"
            location="Austria"
          />
          <Calendar
            trackNumber={12}
            circuit="Silverstone Circuit"
            location="Britain"
          />
          <Calendar
            trackNumber={13}
            circuit="Spa-Francorchamps"
            location="Belgium"
          />
          <Calendar trackNumber={14} circuit="Hungaroring" location="Hungary" />
          <Calendar
            trackNumber={15}
            circuit="Circuit Zandvoort"
            location="Netherlands"
          />
          <Calendar
            trackNumber={16}
            circuit="Autodromo Nazionale Monza"
            location="Italy"
          />
          <Calendar
            trackNumber={17}
            circuit="Baku City Circuit"
            location="Azerbaijan"
          />
          <Calendar
            trackNumber={18}
            circuit="Marine Bay Street Circuit"
            location="Singapore"
          />
          <Calendar
            trackNumber={19}
            circuit="Circuit of the Americas"
            location="United States"
          />
          <Calendar
            trackNumber={20}
            circuit="Autódromo Hermanos Rodríguez"
            location="Mexico"
          />
          <Calendar
            trackNumber={21}
            circuit="Autódromo José Carlos Pace"
            location="Brazil"
          />
          <Calendar
            trackNumber={22}
            circuit="Las Vegas Street Circuit"
            location="United States"
          />
          <Calendar
            trackNumber={23}
            circuit="Losail Circuit"
            location="Qatar"
          />
          <Calendar
            trackNumber={24}
            circuit="Yas Marina Circuit"
            location="Abu Dhabi"
          />
        </div>
      </div>
    </div>
  );
}
