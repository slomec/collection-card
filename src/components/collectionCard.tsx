import { CollectionCardDataInterface } from "../interfaces";
import CardMain from "./cardMain";
import CardPopup from "./cardPopup";
import { useState } from "react";
export default function CollectionCard({
  cardData,
  handleDeleteCard,
}: {
  cardData: CollectionCardDataInterface;
  handleDeleteCard: Function;
}) {
  const [isOpened, setIsOpened] = useState(false);
  function handleSendRaiting(rait: number) {
    alert(`Raiting ${rait} sended on sever`);
  }

  return (
    <div className="text-textColor w-[360px]">
      <CardMain cardData={cardData} onClick={() => setIsOpened(!isOpened)} />
      {isOpened && <CardPopup {...{ handleSendRaiting, handleDeleteCard }} />}
    </div>
  );
}
