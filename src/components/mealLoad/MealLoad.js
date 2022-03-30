import React, { useEffect, useState } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";
import Error from "../Error/Error";

const MealLoad = (props) => {
  const [meals, setMeals] = useState([]);
  const { searchText } = props;

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchText)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return meals ? (
    <div className="mt-5 container">
      <h2 className="my-5 text-start">{meals.length} Results Found</h2>
      <Container>
        <Row>
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      </Container>
    </div>
  ) : (
    <Error></Error>
  );
};

export default MealLoad;
