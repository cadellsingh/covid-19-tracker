import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ListCountries from './ListCountries'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class SidebarConts extends Component {
  state = {
    continent: '',
  }

  render() {
    const continents = ['World', 'Asia', 'Africa', 'North America', 'South America', 'Europe', 'Australia/Oceania']

    return (
      <Container fluid className='main-container'>
        <Row>
          <Col className='sidebar' md='12' lg='2' xl='2' xs='12' sm='12'>
            <Navbar className='heading' variant='dark'>
              <Nav className='mr-auto'>
                <Navbar.Brand>Covid-19 Tracker</Navbar.Brand>
              </Nav>
            </Navbar>
            <ListGroup variant='flush' className='continents'>
              {continents.map((c, index) => (
                <ListGroup.Item key={index} className='list-content'>
                  <Link className='link' to={{
                    pathname:`/`,
                    continent: c
                  }}>
                    {c}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Route exact path='/' component={ListCountries}/>
        </Row>
      </Container>
    )
  }
}

export default SidebarConts


