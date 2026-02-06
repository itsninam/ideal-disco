import supabase from "../../../services/supabase";

export const getActiveCards = async () => {
  let { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("status", "active");

  if (error) {
    throw Error("Could not find cards");
  }

  return data;
};

export const deleteCard = async ({ id }) => {
  const { error } = await supabase.from("cards").delete().eq("id", id);

  if (error) throw error("Could not delete card");
};
