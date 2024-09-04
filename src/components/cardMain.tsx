import { CollectionCardDataInterface } from "../interfaces";
import DifficultyBar from "./difficultyBar";
import DurationBar from "./durationBar";
import PlayersQuantity from "./playersQuantity";

export default function CardMain({ cardData }: { cardData: CollectionCardDataInterface }) {
  return (
    <div className="bg-cardBG w-[360px] h-[126px] gap-4 p-1 shadow-md rounded-2xl flex">
      <img src={cardData.image} alt={cardData.title} className="aspect-square rounded-xl shadow-md" />
      <div className="size-full relative flex flex-col justify-between py-2">
        <h5 className="font-bold text-base">{cardData.title}</h5>

        <div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-xs">Время игры</p>
            <DurationBar duration={cardData.duration} />
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="text-xs ">Сложность</p>
            <DifficultyBar difficulty={cardData.difficulty} />
          </div>
        </div>

        <div className="size-fit">
          <PlayersQuantity minPlayers={cardData.minPlayers} maxPlayers={cardData.maxPlayers} />
        </div>
      </div>
      <div className="w-[60px]"></div>
    </div>
  );
}
