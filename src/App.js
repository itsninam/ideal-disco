import { Route, Routes } from "react-router";
import "./App.css";
import CardsPage from "./features/CardsPage";
import CreateCard from "./features/createCard/CreateCard";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/new" element={<CreateCard />} />
      </Routes>
    </main>
  );
}

export default App;
