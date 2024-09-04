function Rate({ handleSendRaiting }: { handleSendRaiting: Function }) {
  return (
    <button className="h-[42px] p-3 flex gap-2 items-center bg-[#fff] rounded-xl ">
      <img src="/popupIcons/star.svg" alt="star" /> Оценить
    </button>
  );
}

function Info() {
  return (
    <button className="size-fit">
      <img className="h-[42px]" src="/popupIcons/showInfoBtn.svg" alt="ShowInfoBar" />
    </button>
  );
}

function Delete({ handleDeleteCard }: { handleDeleteCard: Function }) {
  return (
    <button className="size-fit">
      <img className="h-[42px]" src="/popupIcons/trashIcon.svg" alt="trash" />
    </button>
  );
}

export default function CardPopup({
  handleSendRaiting,
  handleDeleteCard,
}: {
  handleSendRaiting: Function;
  handleDeleteCard: Function;
}) {
  return (
    <div className="w-auto h-[66px] mx-[48px] bg-popUpBG shadow-md rounded-b-2xl flex justify-around items-center">
      <Rate handleSendRaiting={handleSendRaiting} />
      <Info />
      <Delete handleDeleteCard={handleDeleteCard} />
    </div>
  );
}
