import React from "react";
import { useCards } from "./hooks/useCards";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Card from "./components/Card";

function ActiveCards() {
  const { data, isLoading, isError, error } = useCards();

  if (isLoading) return <Loading />;

  if (isError) return <Error message={error.message} />;

  if (!data.length) return <p>Add a card</p>;

  return (
    <ul>
      {data.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
}

export default ActiveCards;
