import React from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const TableScroll = styled.div`
  height: 100vh;
  overflow-y: scroll;

  & td {
    padding: 20px;
  }

  & .table-dark.table-striped tbody tr:nth-of-type(even) {
    background-color: #45a29e;
  }

  @media only screen and (min-width: 1200px) {
    & th {
      font-size: 20px;
    }

    & td {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 770px) {
    & th {
      font-size: 13px;
    }

    & td {
      font-size: 13px;
    }
  }
`;

const TableData = (props) => {
  const { selectedCountries } = props;

  return (
    <TableScroll>
      <Table striped hover variant="dark" responsive="xl">
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>New Cases</th>
            <th>New Deaths</th>
          </tr>
        </thead>
        <tbody>
          {selectedCountries.map((data, index) => (
            <tr key={index}>
              <td>{data.country}</td>
              <td>{data.cases.toLocaleString()}</td>
              <td>{data.deaths.toLocaleString()}</td>
              <td>{data.recovered.toLocaleString()}</td>
              <td>{data.todayCases.toLocaleString()}</td>
              <td>{data.todayDeaths.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableScroll>
  );
};

export default TableData;
