import { CollectionCardDataInterface } from "../api/interfaces";
import { MouseEventHandler } from "react";
import { calculateQuantity } from "../api/playersQuantityCalc";

export default function CardMain({
  cardData,
  onClick,
}: {
  cardData: CollectionCardDataInterface;
  onClick: MouseEventHandler;
}) {
  return (
    <div
      className="bg-cardBG w-full h-[126px] gap-4 p-1 shadow-md rounded-2xl flex relative pr-[40px] hover:cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <ImageShadow image={cardData.image} title={cardData.title} />

      <div className="size-full relative flex flex-col justify-between py-3 ">
        <h5 className="font-bold text-[12px]">{cardData.title}</h5>

        <div>
          <DurationBar duration={cardData.duration} />
          <DifficultyBar difficulty={cardData.difficulty} />
        </div>

        <PlayersQuantity minPlayers={cardData.minPlayers} maxPlayers={cardData.maxPlayers} />
      </div>

      <Raiting raiting={cardData.raiting} />
    </div>
  );
}

function ImageShadow({ image, title }: { image: string; title: string }) {
  return (
    <div className="aspect-square h-full relative flex">
      <div className="rounded-xl size-full absolute shadow-[inset_0_0px_10px_-5px_rgba(0,0,0,0.3)] z-10"></div>
      <img src={image} alt={title} className="rounded-xl size-full absolute z-0" />
    </div>
  );
}

function DurationBar({ duration }: { duration: number }) {
  const durations = [
    { image: "/duration/fast.svg", alt: "fast" },
    { image: "/duration/fast-medium.svg", alt: "fast-medium" },
    { image: "/duration/medium.svg", alt: "medium" },
    { image: "/duration/medium-long.svg", alt: "medium-long" },
    { image: "/duration/long.svg", alt: "long" },
  ];
  const { image, alt } = durations[duration > 0 && duration <= 5 ? duration - 1 : 0];

  return (
    <div className="flex flex-row items-center justify-between">
      <p className="text-[10px]">Время игры</p>
      <img src={image} alt={alt} className="w-[100px]"></img>
    </div>
  );
}

function DifficultyBar({ difficulty }: { difficulty: number }) {
  const difficulties = [
    <div className={`rounded-md border bg-[#fff] border-[#51CCE7] w-[100px] h-[7px] overflow-hide`}>
      <div className={`h-full w-0 bg-[#51CCE7] `}></div>
    </div>,
    <div className={`rounded-md border bg-[#fff] border-[#51CCE7] w-[100px] h-[7px] overflow-hide`}>
      <div className={`h-full w-1/5 bg-[#51CCE7] `}></div>
    </div>,
    <div className={`rounded-md border bg-[#fff] border-[#63DE03] w-[100px] h-[7px] overflow-hide`}>
      <div className={`h-full w-2/5 bg-[#63DE03] `}></div>
    </div>,
    <div className={`rounded-md border bg-[#fff] border-[#F8D107] w-[100px] h-[7px] overflow-hide`}>
      <div className={`h-full w-3/5 bg-[#F8D107] `}></div>
    </div>,
    <div className={`rounded-md border bg-[#fff] border-[#FF9D43] w-[100px] h-[7px] overflow-hide`}>
      <div className={`h-full w-4/5 bg-[#FF9D43] `}></div>
    </div>,
    <div className={`rounded-md border bg-[#fff] border-[#B62323] w-[100px] h-[7px] overflow-hide`}>
      <div className={`h-full w-full bg-[#B62323] `}></div>
    </div>,
  ];

  return (
    <div className="flex flex-row items-center justify-between">
      <p className="text-[10px] ">Сложность</p>
      {difficulties[difficulty >= 0 && difficulty <= 5 ? difficulty : 0]}
    </div>
  );
}

function PlayersQuantity({ minPlayers, maxPlayers }: { minPlayers: number; maxPlayers: number }) {
  return (
    <div className="flex flex-row items-center relative size-fit">
      <img src="/playersIcon.svg" alt="players" className="relative z-10 h-[18px]" />
      <div className="bg-popUpBG text-[11px] font-bold px-3 rounded-r-lg relative z-0 right-[5px] h-[17px]">
        {calculateQuantity(minPlayers, maxPlayers)}
      </div>
    </div>
  );
}

function Raiting({ raiting }: { raiting: number }) {
  return (
    <div>
      <img src="/raiting.svg" alt="" className="absolute right-[5px] top-0 z-0" />
      <div className="w-[48px] h-[20px] text-[#fff] font-bold text-xs absolute right-0 top-[19px] z-1 text-center">
        {raiting.toFixed(1)}
      </div>
    </div>
  );
}
