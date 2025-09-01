import Current from "./current";

// TODO: if date is race day make white bar a random number
// TODO: if race is over but still race day make the white bar at the end
// TODO: if not race day put white bar at the beginning
export default function CurrentInfo() {
  return (
    <>
      <Current
        circuit="Melbourne"
        location="Australia"
        date="Mar 16"
        time="3:00 AM"
        distance={306.124}
        imgSrc="/trackOutlines/australia.png"
      />
    </>
  );
}
