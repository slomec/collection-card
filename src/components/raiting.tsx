export default function Raiting({ raiting }: { raiting: number }) {
  return (
    <div>
      <img src="/raiting.svg" alt="" className="absolute right-[5px] top-0 z-0" />
      <div className="w-[48px] h-[20px] text-[#fff] font-bold text-xs absolute right-0 top-[19px] z-1 text-center">
        {raiting.toFixed(1)}
      </div>
    </div>
  );
}
