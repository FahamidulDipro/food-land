import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Home from "../Home/Home";

const MealDetail = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  const { strMeal, strMealThumb, strInstructions, strArea } = meal;
  return strMeal ? (
    <Card>
      <Card.Img
        variant="top"
        src={strMealThumb}
        style={{ height: "50vh", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Text className="text-start">
          <h3>
            <span className="text-warning ">{strMeal}</span>{" "}
            <span>is a delicious {strArea} dish</span>
          </h3>
          {strInstructions}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Home></Home>
  );
};

export default MealDetail;
