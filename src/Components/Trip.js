import React, { Component } from 'react';

class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Trip: {},
            loading: true
        };

        this.itemTotal = this.itemTotal.bind(this);
    }

    componentDidMount() {
        fetch(`https://arcane-spire-06450.herokuapp.com/api/trips/${this.props.id}`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            if (myJson._id) {
                this.props.viewedTrip(myJson._id);
            }

            this.setState({
                Trip: myJson,
                loading: false
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({loading: true});

            fetch(`https://arcane-spire-06450.herokuapp.com/api/trips/${this.props.id}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                if (myJson._id) {
                    this.props.viewedTrip(myJson._id);
                }

                this.setState({
                    Trip: myJson,
                    loading: false
                });
            });
        }
    }
    
    // Render function
    render() {
        if (this.state.loading) {
            return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
        } else {
            if (this.state.Trip._id) {
                return (
                    <div>
                        <h1>Trip: {this.Trip._id}</h1>
                        {/* { <Card.Header>Bike:{this.Trip._id} {this.Trip.usertype}</Card.Header>
                            <Card.Body>
                                    <Card.Text>
                               {this.Trip.start_station_name} {this.Trip.end_station_name}
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
{/*                 
                        <MapContainer style={{ "height": "400px" }} center={[start station location coordinate 1, start station location coordinate 0]} zoom={15}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[start station location coordinate 1, start station location coordinate 0]}>
                        <Tooltip permanent direction='right'>Start: {start station name}</Tooltip>
                        </Marker>
                        <Marker position={[end station location coordinate 1, end station location coordinate 0]}>
                        <Tooltip permanent direction='right'>End: {this.Trip.end_station_name}</Tooltip>
                        </Marker>
                        </MapContainer> */}
{/* 
<Form>
    <Form.Group>
        <Form.Label>Bike ID</Form.Label>
        <Form.Control type="number" name="bikeid" />
    </Form.Group>
    <Form.Group>
        <Form.Label>Birth Year</Form.Label>
        <Form.Control type="number" name="birth year" />
    </Form.Group>
    <Form.Check
        type="radio"
        label="Subscriber"
        name="usertype"
        value="Subscriber"
        id="subscriber"
    />
    <Form.Check
        type="radio"
        label="Customer"
        name="usertype"
        value="Customer"
        id="customer"
    />
    <hr />
    <Link to="/Trips" className="btn btn-secondary float-right ml-1">Back to Trips</Link>
    <Button type="submit" className="float-right" >Update Trip User</Button>
</Form> } */}
                
                    </div>);
            } else {
                return <div><h1>Unable to find Trip</h1><p>id: {this.props.id}</p></div>
            }
        }
    }
}

export default Trip;