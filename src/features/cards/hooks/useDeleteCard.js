import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCard } from "../services/cardsApi";

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCard,
    onSuccess: () => {
      queryClient.invalidateQueries(["cards"]);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
