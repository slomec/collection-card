import { CollectionCardDataInterface } from "../api/interfaces";
import CardMain from "./cardMain";
import CardPopup from "./cardPopup";
import { useState } from "react";
import { PopupContext } from "../api/hooks";

export default function CollectionCard({
  cardData,
  handleDeleteCard,
}: {
  cardData: CollectionCardDataInterface;
  handleDeleteCard: (id: number) => void;
}) {
  const [isOpened, setIsOpened] = useState(false);
  const id = cardData.id;
  function handleSendRaiting(rait: number) {
    alert(`Raiting ${rait} sended on sever`);
  }

  return (
    <div className="text-textColor w-[360px]">
      <CardMain cardData={cardData} onClick={() => setIsOpened(!isOpened)} />
      {isOpened && (
        <PopupContext.Provider value={{ handleSendRaiting, handleDeleteCard, id }}>
          <CardPopup />
        </PopupContext.Provider>
      )}
    </div>
  );
}
