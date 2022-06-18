import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter , Route } from 'react-router-dom';
import Trips from './Components/Trips';
import Trip from './Components/Trip';
import NotFound from './Components/NotFound';
import About from './Components/About';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentlyViewed: [],
      searchId: ""
    };
    
    // Bind the method inside the constructor
    this.viewedTrip = this.viewedTrip.bind(this);
    this.updateSearchId = this.updateSearchId.bind(this);

  }

  // Method implementation
  viewedTrip(id) {
    if (this.state.recentlyViewed.indexOf(id) === -1) {
    this.setState({
        recentlyViewed: [...this.state.recentlyViewed, id]
      })
  }}

  // Method implementation
  updateSearchId(e) {
    this.setState({
      searchId: e.target.value
    });
  }


  render() {
    return (
      <div>
           <Container>
            <Row>
            <Col md={12}>
                
                <Route exact path="/" render={() => (
                  <BrowserRouter  push to={"/Trips"} />
                )} />

                <Route exact path="/About" render={() => (
                  <About />
                )} />

                <Route exact path="/NotFound" render={() => (
                  <NotFound />
                )} />

                <Route exact path="/Trips" render={() => (
                  <Trips />
                )} />

                <Route path="/Trip/:id" render={(props) => (
                  <Trip id={props.match.params.id} viewedTrip={this.viewedTrip} />
                )} />
              
                <Route render={() => (
                  <NotFound />
                )} />
            </Col>
          </Row>
        </Container>
    </div>
    );
  } 
}

export default App;
