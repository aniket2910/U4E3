import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
export const Flex = styled.div`
  //  add required style
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props.item;
  return (
    <>
      <Link to={`/books/${id}`}>
        <Flex>
          <img src={thumbnailUrl} alt={title} height="200px" width={"200px"} />
          <h3>{title}</h3>
          <h4>{isbn}</h4>
        </Flex>
      </Link>
    </>
  );
};
