import { PopupContextType } from "./interfaces";
import { useContext, createContext } from "react";

export const PopupContext = createContext<PopupContextType | null>(null);

export function usePopupContext(): PopupContextType {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopupContext must be used within a PopupProvider");
  }
  return context;
}
