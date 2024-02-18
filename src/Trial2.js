import React, { Component } from "react";

class Trial2 extends Component {
    render() {
        const { name, specialization, rate, location, phoneNumber } = this.props;
        return (
            <div className="card">
                <div>Name: {name}</div>
                <div>Specialization: {specialization}</div>
                <div>Rate: {rate}</div>
                <div>Location: {location}</div>
                <div>Phone Number: {phoneNumber}</div>
            </div>
        );
    }
    }   
export default Trial2;