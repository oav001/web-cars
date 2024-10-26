import React from "react";
import { cars } from "./cars";
import "./index.css";

const CarCard = (props) => {
  console.log(props);

  const { image, description, owner, year, mileage, fuel, gearbox, price, id } =
    props;

  const getCar = (id) => {
    const car = cars.find((car) => car.id === id);

    console.log(car);
  };

  const getSingleCar = (id) => {
    getCar(id);
  };

  return (
    <div className="car">
      <img src={image} alt="car1" />
      <div className="descript">
        <h3>{description}</h3>
        <p className="owner">{owner}</p>
      </div>

      <ul className="card-container">
        <li>{year}</li>
        <li>{mileage}</li>
        <li>{fuel}</li>
        <li>{gearbox}</li>
      </ul>
      <br></br>
      <span>{price} </span>
      <br></br>
      <h2>{id} </h2>

      <button onClick={() => getSingleCar(id)}>View Details</button>

      <br></br>
    </div>
  );
};

export default CarCard;
