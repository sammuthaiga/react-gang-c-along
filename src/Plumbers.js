import React, { Component } from "react";
import PlumberList from "./PlumberList";

class Plumbers extends Component {
    state = {
        plumbers: [
            {
                id: '1',
                name: "Mark",
                age: 30,
                speciality: "Industrial",
                phoneNo: "08012345678",
                location: "Nairobi",
                rate: "USD 50 per hour"

            },
            {
                id: '2',
                name: "Sam",
                age: 29,
                speciality: "Green",
                phoneNo: "08012345678",
                location: "Nairobi",
                rate: "USD 150 per hour"

            },
            {
                id: '3',
                name: "June",
                age: 35,
                speciality: "Residential",
                phoneNo: "08012345678",
                location: "Nairobi",
                rate: "USD 40 per hour"

            }
        ]
    }
    render() {
       return (
        <div className="plumber-list">
            <PlumberList plumbers={this.state.plumbers} />
        </div>
        );
    }
    }

export default Plumbers;