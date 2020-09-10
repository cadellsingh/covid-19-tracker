import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContinentsContainer = styled(ListGroup)`
  font-size: 20px;

  @media only screen and (max-width: 990px) {
    display: table;
    width: 100%;
    text-align: center;
  }
`;

const ListContinents = styled(ListGroup.Item)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #1f2833;
  padding-left: 0;
  font-size: 17px;
  border: 0;

  &:hover {
    cursor: pointer;
  }

  & a {
    color: #66fcf1;
  }

  & a:hover {
    text-decoration: none;
    color: #c5c6c7;
  }

  @media only screen and (min-width: 1200px) {
    & a {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 990px) {
    display: inline;

    & a {
      padding: 0 5px;
    }
  }

  @media only screen and (max-width: 770px) {
    & a {
      padding: 0;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 380px) {
    & a {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 314px) {
    & a {
      font-size: 10px;
    }
  }
`;

const DisplayContinents = () => {
  const continents = [
    "World",
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Europe",
    "Australia/Oceania",
  ];

  return (
    <ContinentsContainer variant="flush">
      {continents.map((c, index) => (
        <ListContinents key={index}>
          <Link
            to={{
              pathname: `/`,
              continent: c,
            }}
          >
            {c}
          </Link>
        </ListContinents>
      ))}
    </ContinentsContainer>
  );
};

export default DisplayContinents;
