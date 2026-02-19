import React, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateCard } from "../features/cards/hooks/useCreateCard";
import { colors } from "../features/createCard/config/colors";
import { icons } from "../features/createCard/config/icons";
import { backgrounds } from "../features/createCard/config/backgrounds";
import Button from "./Button";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

const AppFormContext = createContext(null);

function useAppForm() {
  const context = useContext(AppFormContext);

  if (!context) {
    throw new Error("Form components must be used within <Form>");
  }
  return context;
}

function AppForm({ children }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      color: colors[0].name,
      icon: icons[0].name,
      decor: backgrounds[0].name,
    },
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createCard } = useCreateCard();

  const color = watch("color");
  const decor = watch("decor");
  const icon = watch("icon");

  const createNewCard = (data) => {
    const { name, slots, reward, expiration, icon } = data;

    const card = {
      name,
      slots: Array.from({ length: Number(slots) }, (_, i) => false),
      reward,
      expiration,
      icon,
    };

    createCard(card, {
      onSuccess: () => {
        navigate(-1);
        queryClient.invalidateQueries(["cards"]);
      },
    });
  };

  return (
    <AppFormContext.Provider value={{ register, color, decor, icon, errors }}>
      <form
        onSubmit={handleSubmit(createNewCard)}
        style={{ backgroundColor: color, backgroundImage: decor }}
      >
        {children}
      </form>
    </AppFormContext.Provider>
  );
}

function Input({ label, type, name, min }) {
  const { register, errors } = useAppForm();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(`${name}`, { required: true })}
        min={min}
        className={errors[`${name}`] ? "error" : ""}
      />
      {errors[`${name}`] ? (
        <span className="error-message">This field is required</span>
      ) : null}
    </div>
  );
}

function Select({ name, items, label, type }) {
  const { register, color, decor, icon } = useAppForm();
  const selections = [color, decor, icon];

  const isIcon = type === "icon";
  const isBackground = type === "decor";

  const getStyles = (name) => {
    return {
      backgroundImage: isBackground ? name : "",
      backgroundColor: !isBackground ? name : "",
    };
  };

  return (
    <fieldset>
      <legend>Choose a {label}</legend>

      <div className="flex-container">
        {items.map((item) => (
          <label
            key={item.name}
            className={`select ${
              selections.includes(item.name) ? "active" : ""
            }`}
            style={getStyles(item.name)}
          >
            <input type="radio" {...register(`${name}`)} value={item.name} />
            {isIcon && (
              <span className="material-symbols-outlined">{item.name}</span>
            )}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Count({ name, type, label }) {
  const { register } = useAppForm();
  const [count, setCount] = useState(3);

  const removeSlots = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addSlots = () => {
    if (count < 15) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="flex-container counter">
        <Button btnType="button" onHandleClick={removeSlots} type="btn-icon">
          <span className="material-symbols-outlined">remove</span>
        </Button>
        <input id={name} type={type} value={count} {...register(`${name}`)} />
        <Button btnType="button" onHandleClick={addSlots} type="btn-icon">
          <span className="material-symbols-outlined">add</span>
        </Button>
      </div>
    </>
  );
}

AppForm.Input = Input;
AppForm.Select = Select;
AppForm.Count = Count;

export default AppForm;
