import React from "react";
import CreateCard from "./createCard/CreateCard";
import ActiveCards from "./cards/ActiveCards";
import Button from "../components/Button";
import { Link } from "react-router";

function CardsPage() {
  return (
    <>
      <ActiveCards />
      <Link to="/new">create card</Link>
    </>
  );
}

export default CardsPage;
