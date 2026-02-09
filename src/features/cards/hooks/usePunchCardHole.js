import { useMutation, useQueryClient } from "@tanstack/react-query";
import { punchCard } from "../services/cardsApi";

export const usePunchCardHole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: punchCard,
    onSuccess: () => {
      queryClient.invalidateQueries(["cards"]);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
