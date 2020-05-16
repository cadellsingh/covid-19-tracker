import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class ListCountries extends Component {
  state = {
    query: '',
    allCountries: []
  }

  componentDidMount() {
    fetch('https://disease.sh/v2/countries?yesterday=true')
    .then(res => res.json())
    .then((data) => {
      this.setState({allCountries: data})
    })
    .catch(console.log())
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }

  render() {
    const { query, allCountries } = this.state
    let continent = this.props.location.continent
    let selectedCountries = allCountries.sort((a, b) => b.cases - a.cases)

    if (typeof continent === 'undefined' || continent === 'World') {  
      continent = 'World'
    } else {
      selectedCountries = allCountries.filter(data => (
        data.continent === continent
      ))
    }

    selectedCountries = query === ''
      ? selectedCountries
      : selectedCountries.filter((c) => (
        c.country.toLowerCase().includes(query.toLowerCase())
      ))
    
    console.log(selectedCountries)

    return (
      <Col className='main'>
        <Navbar expand='lg' variant='dark' bg='dark'>
          <Nav className='mr-auto'>
            <Navbar.Brand className='hello' >{continent} Covid-19 Stats</Navbar.Brand>
          </Nav>
          <Form inline>
            <FormControl 
              type='text' 
              placeholder='Search Country' 
              className='mr-sm-2'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </Form>
        </Navbar>

        <div className='table-scroll'>
          <Table striped hover variant='dark' className='country-data' responsive='xl'>
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
        </div>
      </Col>
    )
  }
}

export default ListCountries