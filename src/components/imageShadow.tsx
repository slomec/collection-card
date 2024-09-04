export default function ImageShadow({ image, title }: { image: string; title: string }) {
  return (
    <div className="aspect-square h-full relative flex">
      <div className="rounded-xl size-full absolute shadow-[inset_0_0px_10px_-5px_rgba(0,0,0,0.3)] z-10"></div>
      <img src={image} alt={title} className="rounded-xl size-full absolute z-0" />
    </div>
  );
}
