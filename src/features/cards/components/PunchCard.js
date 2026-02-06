import React, { createContext, useContext } from "react";
import Button from "../../../components/Button";
import { useDeleteCard } from "../hooks/useDeleteCard";

const PunchCardContext = createContext(null);

function usePunchCard() {
  const context = useContext(PunchCardContext);

  if (!context) {
    throw new Error("PunchCard components must be used within <PunchCard>");
  }
  return context;
}

function PunchCard({ children, card }) {
  return (
    <PunchCardContext.Provider value={{ card }}>
      <li>
        <div className="card-actions">
          <DeleteButton />
        </div>
        {children}
      </li>
    </PunchCardContext.Provider>
  );
}

function DeleteButton() {
  const { card } = usePunchCard();
  const { mutate: deleteCard, isPending } = useDeleteCard();

  return (
    <Button
      onHandleClick={() => deleteCard({ id: card.id })}
      disabled={isPending}
    >
      <span className="material-symbols-outlined">delete</span>
    </Button>
  );
}

function Title({ children }) {
  const { card } = usePunchCard();
  return (
    <h1>
      <span>{children}</span>
      <span className="material-symbols-outlined">{card.icon}</span>
    </h1>
  );
}

function Holes() {
  const { card } = usePunchCard();

  return (
    <div className="btn-container">
      {card.slots.map((slot, index) => (
        <Hole key={index} />
      ))}
    </div>
  );
}

function Hole() {
  return (
    <Button>
      <span>slot</span>
    </Button>
  );
}

function Footer({ children }) {
  return <div className="footer">{children}</div>;
}

function Reward({ children }) {
  return (
    <p>
      <span className="material-symbols-outlined">chess_queen</span>
      <span>{children}</span>
    </p>
  );
}

function Completion({ children }) {
  return (
    <p className="completion">
      <span className="material-symbols-outlined">search_activity </span>
      <span>{children}</span>
    </p>
  );
}

PunchCard.Title = Title;
PunchCard.Holes = Holes;
PunchCard.Reward = Reward;
PunchCard.Completion = Completion;
PunchCard.Footer = Footer;

export default PunchCard;
