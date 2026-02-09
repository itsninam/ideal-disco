import supabase from "../../../services/supabase";

export const getActiveCards = async () => {
  let { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("status", "active");

  if (error) throw Error("Could not load cards. Please try again later.");

  return data;
};

export const deleteCard = async ({ id }) => {
  const { error } = await supabase.from("cards").delete().eq("id", id);

  if (error) throw Error("Could not delete card. Please try again later.");
};

export const punchCard = async ({ slots, id, status }) => {
  const { error } = await supabase
    .from("cards")
    .update({ slots: slots, status: status })
    .eq("id", id);

  if (error) throw Error("Could not update card. Please try again later");
};
