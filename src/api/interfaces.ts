export interface CollectionCardDataInterface {
  id: number;
  title: string;
  image: string;
  raiting: number;
  minPlayers: number;
  maxPlayers: number;
  duration: number;
  difficulty: number;
}

export interface PopupContextType {
  handleSendRaiting: (raiting: number) => void;
  handleDeleteCard: (id: number) => void;
  id: number;
}
