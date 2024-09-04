import React from "react";
import CollectionCard from "./components/collectionCard";
import { paleoCardData } from "./lib/data";

export default function App() {
  return (
    <div className="App m-10">
      <CollectionCard cardData={paleoCardData} />
    </div>
  );
}
