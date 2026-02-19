import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCard as createCardApi } from "../services/cardsApi";

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCardApi,
    onError: (error) => {
      alert(error.message);
    },
  });
};
