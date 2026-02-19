import React from "react";
import AppForm from "../../components/AppForm";
import Button from "../../components/Button";
import { useCreateCard } from "../cards/hooks/useCreateCard";
import { colors } from "./config/colors";
import { icons } from "./config/icons";
import { backgrounds } from "./config/backgrounds";
import { useNavigate } from "react-router";

function CreateCard() {
  const { isPending } = useCreateCard();
  const navigate = useNavigate();

  return (
    <AppForm>
      <Button onHandleClick={() => navigate(-1)}>back</Button>
      <AppForm.Input type="text" name="name" label="Goal" />
      <AppForm.Input type="text" name="reward" label="Reward" />
      <AppForm.Input
        type="date"
        name="expiration"
        label="Expiration"
        min={new Date().toISOString().split("T")[0]}
      />
      <AppForm.Count type="number" name="slots" label="Slots" />
      <AppForm.Select name="color" label="color" items={colors} type="color" />
      <AppForm.Select
        name="decor"
        label="decor"
        items={backgrounds}
        type="decor"
      />
      <AppForm.Select name="icon" label="icon" items={icons} type="icon" />
      <Button btnType="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </Button>
    </AppForm>
  );
}

export default CreateCard;
