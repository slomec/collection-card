import { useState } from "react";
import CollectionCard from "./components/collectionCard";
import { cards } from "./lib/data";

export default function App() {
  const [cardsList, setCardsList] = useState(cards.map((card) => card.id));

  function handleDeleteCard(id: number) {
    setCardsList(cardsList.filter((cardId) => cardId !== id));
  }

  return (
    <div className="App m-10">
      <div className="flex flex-col gap-2">
        {cards.map((card) => {
          if (cardsList.includes(card.id)) {
            return <CollectionCard key={card.id} cardData={card} handleDeleteCard={handleDeleteCard} />;
          }
        })}
      </div>
    </div>
  );
}
