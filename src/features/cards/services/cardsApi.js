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
