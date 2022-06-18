import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Table, Pagination } from "react-bootstrap";

class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Trips: [],
            currentPage: 1
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    // Utility method implementation
    getData(page) {
        fetch(`https://arcane-spire-06450.herokuapp.com/api/trips?page=${page}&perPage=10`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({Trips: myJson});
        });
    }
    
    
    // Component DidMount
    componentDidMount() {
        this.setState(this.getData(this.state.currentPage));
    }
    
    // Previous Page
    previousPage() {
        if (this.state.currentPage > 1) {
            this.getData(this.state.currentPage - 1);
            this.setState({currentPage: this.state.currentPage - 1});
        }
    }
    
    // Next Page
    nextPage() {
        this.getData(this.state.currentPage + 1);
        this.setState({currentPage: this.state.currentPage + 1});
    }
    
    // Render function
    render() {
            return (
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Bike ID</th>
                                <th>Start Station</th>
                                <th>End Station</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Trips.map((Trips) => (
                                <tr key={Trips._id} onClick={() => {this.props.history.push(`/trips/${Trips._id}`)}}>
                                    <td>{Trips.start_station_name}</td>
                                    <td>{Trips.end_station_name}</td>
                                    <td>{new Date(Trips.tripduration).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.Prev onClick={this.previousPage} />
                        <Pagination.Item>{this.state.currentPage}</Pagination.Item>
                        <Pagination.Next onClick={this.nextPage} />
                    </Pagination>
                </div>
            );
        } 
    }


export default withRouter(Trips);