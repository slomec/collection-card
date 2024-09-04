import { CollectionCardDataInterface } from "../interfaces";
import CardMain from "./cardMain";
export default function CollectionCard({ cardData }: { cardData: CollectionCardDataInterface }) {
  return (
    <div className="text-textColor">
      <CardMain cardData={cardData} key={cardData.id} />
    </div>
  );
}
