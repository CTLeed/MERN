import React, { Component } from "react";

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }
    birthday = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render() {
        return (
            <div className="card">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}> Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}