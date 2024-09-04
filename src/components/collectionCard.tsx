import { CollectionCardDataInterface } from "../interfaces";
import CardMain from "./cardMain";
import CardPopup from "./cardPopup";
import { useRef } from "react";
export default function CollectionCard({ cardData }: { cardData: CollectionCardDataInterface }) {
  return (
    <div className="text-textColor w-[360px]">
      <CardMain cardData={cardData} key={cardData.id} />
      <CardPopup />
    </div>
  );
}
