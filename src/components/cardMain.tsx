import { CollectionCardDataInterface } from "../interfaces";
import DifficultyBar from "./difficultyBar";
import DurationBar from "./durationBar";
import PlayersQuantity from "./playersQuantity";

export default function CardMain({ cardData }: { cardData: CollectionCardDataInterface }) {
  return (
    <div className="bg-cardBG w-full h-[126px] gap-4 p-1 shadow-md rounded-2xl flex relative pr-[50px] hover:shadow-inner">
      <img src="/raiting.svg" alt="" className="absolute right-[5px] top-0 z-0" />
      <div className="text-[#fff] font-bold text-xs absolute right-[15px] top-[19px] z-1">
        {cardData.raiting.toFixed(1)}
      </div>

      <img src={cardData.image} alt={cardData.title} className="aspect-square rounded-xl shadow-md" />

      <div className="size-full relative flex flex-col justify-between py-3 ">
        <h5 className="font-bold text-[12px]">{cardData.title}</h5>

        <div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-[10px]">Время игры</p>
            <DurationBar duration={cardData.duration} />
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="text-[10px] ">Сложность</p>
            <DifficultyBar difficulty={cardData.difficulty} />
          </div>
        </div>

        <div className="size-fit">
          <PlayersQuantity minPlayers={cardData.minPlayers} maxPlayers={cardData.maxPlayers} />
        </div>
      </div>
    </div>
  );
}
