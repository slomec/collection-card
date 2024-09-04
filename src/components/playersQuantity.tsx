import { calculateQuantity } from "../api/playersQuantityCalc";
export default function playersQuantity({ minPlayers, maxPlayers }: { minPlayers: number; maxPlayers: number }) {
  return (
    <div className="flex flex-row items-center relative size-fit">
      <img src="/playersIcon.svg" alt="players" className="relative z-10 h-[18px]" />
      <div className="bg-popUpBG text-[11px] font-bold px-3 rounded-r-lg relative z-0 right-[5px] h-[17px]">
        {calculateQuantity(minPlayers, maxPlayers)}
      </div>
    </div>
  );
}
