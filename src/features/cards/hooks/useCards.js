import { useQuery } from "@tanstack/react-query";
import { getActiveCards } from "../services/cardsApi";

export const useCards = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: getActiveCards,
  });
};
