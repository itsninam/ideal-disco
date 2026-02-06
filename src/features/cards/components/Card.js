import React from "react";
import PunchCard from "./PunchCard";

function Card({ card }) {
  return (
    <PunchCard card={card}>
      <PunchCard.Title>{card.name}</PunchCard.Title>
      <PunchCard.Holes />
      <PunchCard.Footer>
        <PunchCard.Reward>{card.reward}</PunchCard.Reward>
        <PunchCard.Completion>{card.completion}</PunchCard.Completion>
      </PunchCard.Footer>
    </PunchCard>
  );
}

export default Card;
