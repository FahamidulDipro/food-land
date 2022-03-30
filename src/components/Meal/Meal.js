import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb } = props.meal;
  const navigate = useNavigate();
  //Detail showing handler function
  const showMealDetail = () => {
    const path = `/${idMeal}`;
    navigate(path);
  };
  return (
    <Col lg={3} className="m-3">
      <Card
        style={{
          width: "20rem",
          padding: "20px",
          backgroundColor: "orange",
        }}
      >
        <Card.Img variant="top" src={strMealThumb} className="rounded" />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            <button className="btn btn-dark" onClick={showMealDetail}>
              See Details
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meal;
