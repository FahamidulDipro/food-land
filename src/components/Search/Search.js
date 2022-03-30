import React, { useState } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import MealLoad from "../mealLoad/MealLoad";
import Warning from "../Warning/Warning";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const findMealsByName = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container mt-5 ">
      <section className="d-flex ">
        <Form className="d-flex w-50 mb-5 ">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={findMealsByName}
          />
          <button className="btn btn-success" onClick={() => findMealsByName}>
            {" "}
            Search
          </button>
        </Form>
      </section>

      {searchText ? (
        <MealLoad
          searchText={searchText}
          findMealsByName={findMealsByName}
        ></MealLoad>
      ) : (
        <Warning></Warning>
      )}
    </div>
  );
};

export default Search;
