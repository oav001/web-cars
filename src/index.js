import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CarCard from "./carCard";
import { cars } from "./cars";
import MainMenu from "./mainMenu";
import FilterMenu from "./FilterMenu";

const CarList = () => {
  return (
    <div>
      <MainMenu />
      <FilterMenu />
      <section className="carList">
        {cars.map((car, index) => (
          <CarCard key={car.id} {...car} number={index} />
        ))}
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CarList />);
