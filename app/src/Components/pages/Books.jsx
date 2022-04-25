import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { Outlet, useParams } from "react-router-dom";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async () => {
      let res = await fetch("http://localhost:8080/books");
      let resData = await res.json();
      setData([...resData]);
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Books</h1>
        <Grid data-testid="books-container">
          {
            !!data &&
              data.map((item) => {
                return <BookCard key={item.id} item={item} />;
              })
            // map thorugh the data and use <BookCard/> component to display each book
          }
        </Grid>
      </div>
    </>
  );
};
export default Books;
