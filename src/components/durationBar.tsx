export default function DurationBar({ duration }: { duration: number }) {
  const durations = [
    { image: "/duration/fast.svg", alt: "fast" },
    { image: "/duration/fast-medium.svg", alt: "fast-medium" },
    { image: "/duration/medium.svg", alt: "medium" },
    { image: "/duration/medium-long.svg", alt: "medium-long" },
    { image: "/duration/long.svg", alt: "long" },
  ];
  const { image, alt } = durations[duration > 0 && duration <= 5 ? duration - 1 : 0];
  return <img src={image} alt={alt} className="w-[100px]"></img>;
}
