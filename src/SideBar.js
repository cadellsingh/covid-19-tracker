import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListCountries from "./ListCountries";
import DisplayContinents from "./DisplayContinents";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const MainContainer = styled(Container)`
  background-color: #45a29e;
`;

const Sidebar = styled(Col)`
  background-color: #1f2833;
  height: 100vh;
  overflow: auto;
  width: 200px;

  & h1 {
    padding-left: 0;
    color: white;
    margin-top: 25px;
    font-size: 1.5em;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    & h1 {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 990px) {
    height: 120px;
  }

  @media only screen and (max-width: 630px) {
    height: 120px;
  }
`;

class SideBar extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Row>
          <Sidebar md="12" lg="2" xl="2" xs="12" sm="12">
            <h1>Covid-19 Tracker</h1>
            <DisplayContinents />
          </Sidebar>
          <Route exact path="/" component={ListCountries} />
        </Row>
      </MainContainer>
    );
  }
}

export default SideBar;
