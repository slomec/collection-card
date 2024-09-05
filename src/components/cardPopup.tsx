import { useState } from "react";
import { usePopupContext } from "../api/hooks";
import { Link } from "react-router-dom";

export default function CardPopup() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="w-auto h-[66px] mx-[48px] bg-popUpBG shadow-md rounded-b-2xl flex justify-around items-center overflow-hide">
      <Rate {...{ isOpened, setIsOpened }} />
      <Info {...{ isOpened }} />
      <Delete {...{ isOpened }} />
    </div>
  );
}

function Rate({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const context = usePopupContext();
  const { handleSendRaiting } = context;

  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (!isOpened) {
    return (
      <button
        className="h-[42px] p-3 flex gap-2 items-center bg-[#fff] rounded-[10px] hover:scale-105"
        onClick={() => setIsOpened(true)}
      >
        <img src="/popupIcons/star.svg" alt="star" /> Оценить
      </button>
    );
  } else {
    return (
      <div className="h-[42px] width-full p-3 flex gap-2 items-center bg-[#fff] rounded-[10px]">
        {stars.map((rait) => (
          <button
            key={rait}
            onClick={() => {
              setIsOpened(false);
              handleSendRaiting(rait);
            }}
          >
            <img className="size-full hover:scale-150" src="/popupIcons/star.svg" alt="star" />
          </button>
        ))}
      </div>
    );
  }
}

function Info({ isOpened }: { isOpened: boolean }) {
  return (
    !isOpened && (
      <Link to="/description" className="size-fit rounded-[10px] hover:scale-105">
        <img className="h-[42px]" src="/popupIcons/showInfoBtn.svg" alt="ShowInfoBar" />
      </Link>
    )
  );
}

function Delete({ isOpened }: { isOpened: boolean }) {
  const context = usePopupContext();
  const { handleDeleteCard, id } = context;

  return (
    !isOpened && (
      <button className="size-fit rounded-[10px] hover:scale-105" onClick={() => handleDeleteCard(id)}>
        <img className="h-[42px]" src="/popupIcons/trashIcon.svg" alt="trash" />
      </button>
    )
  );
}
