import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import TopHeader from "./TopHeader";
import TableData from "./TableData";

const DataColumn = styled(Col)`
  padding: 0;
  height: 100%;
`;

class ListCountries extends Component {
  state = {
    query: "",
    allCountries: [],
  };

  componentDidMount() {
    fetch("https://disease.sh/v2/countries?yesterday=true")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allCountries: data });
      })
      .catch(console.log());
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
  };

  render() {
    const { query, allCountries } = this.state;
    let continent = this.props.location.continent;
    let selectedCountries = allCountries.sort((a, b) => b.cases - a.cases);

    if (typeof continent === "undefined" || continent === "World") {
      continent = "World";
    } else {
      selectedCountries = allCountries.filter(
        (data) => data.continent === continent
      );
    }

    selectedCountries =
      query === ""
        ? selectedCountries
        : selectedCountries.filter((c) =>
            c.country.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <DataColumn>
        <TopHeader
          continent={continent}
          query={query}
          updateQuery={this.updateQuery}
        />
        <TableData selectedCountries={selectedCountries} />
      </DataColumn>
    );
  }
}

export default ListCountries;
