import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  padding-top: 10px;
  padding-bottom: 10px;

  @media only screen and (min-width: 1200px) {
    .navbar-brand {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledForm = styled(Form)`
  @media only screen and (max-width: 540px) {
    margin: 15px 0;
    width: 100%;

    & .form-inline .form-control {
      width: 100%;
    }
  }
`;

const TopHeader = (props) => {
  const { continent, query, updateQuery } = props;

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <StyledNav className="mr-auto">
        <Navbar.Brand>{continent} Covid-19 Stats</Navbar.Brand>
      </StyledNav>
      <StyledForm inline>
        <FormControl
          type="text"
          placeholder="Search Country"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </StyledForm>
    </Navbar>
  );
};

export default TopHeader;
