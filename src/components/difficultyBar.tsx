export default function DifficultyBar({ difficulty }: { difficulty: number }) {
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
