import React from "react";
import { Card, Col } from "react-bootstrap";

const Meal = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  return (
    <Col lg={3} className="my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            <button className="btn btn-primary">See Details</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meal;
