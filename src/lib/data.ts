import CollectionCard from "../components/collectionCard";
import { CollectionCardDataInterface } from "../interfaces";

export const paleoCardData: CollectionCardDataInterface = {
  id: 1,
  title: "Paleo (Палео)",
  image: "/paleoImage.png",
  raiting: 9.0,
  minPlayers: 4,
  maxPlayers: 12,
  duration: 3,
  difficulty: 2,
};

export const cards: CollectionCardDataInterface[] = [
  {
    id: 1,
    title: "Paleo (Палео)",
    image: "/paleoImage.png",
    raiting: 9.0,
    minPlayers: 4,
    maxPlayers: 12,
    duration: 3,
    difficulty: 2,
  },
  {
    id: 2,
    title: "Взрывные котята 18+",
    image: "/pass.png",
    raiting: 8.0,
    minPlayers: 2,
    maxPlayers: 6,
    duration: 2,
    difficulty: 1,
  },
  {
    id: 3,
    title: "Взрывные котята",
    image: "/pass.png",
    raiting: 7.0,
    minPlayers: 2,
    maxPlayers: 6,
    duration: 2,
    difficulty: 1,
  },
];
