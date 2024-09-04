import { CollectionCardDataInterface } from "../interfaces";
import DifficultyBar from "./difficultyBar";
import DurationBar from "./durationBar";
import PlayersQuantity from "./playersQuantity";
import Raiting from "./raiting";
import ImageShadow from "./imageShadow";

export default function CardMain({ cardData }: { cardData: CollectionCardDataInterface }) {
  return (
    <div className="bg-cardBG w-full h-[126px] gap-4 p-1 shadow-md rounded-2xl flex relative pr-[40px] hover:shadow-inner">
      <ImageShadow image={cardData.image} title={cardData.image} />

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
