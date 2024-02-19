import React, { Component } from "react";
import PlumberList from "./PlumberList";
import AddPlumber from "./AddPlumber";


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
    addPlumber =(plumber) => {
        plumber.id = Math.random();
        let plumbers = [...this.state.plumbers, plumber];
        this.setState({
            plumbers: plumbers
        });
      }
    
    deletePlumber = (id) => {
        let plumbers = this.state.plumbers.filter(plumber => {
            return plumber.id !== id
        });
        this.setState({
            plumbers: plumbers
        });
    }

    
    render() {
       return (
        <div className="plumber-list">
            <PlumberList deletePlumber={this.deletePlumber} plumbers={this.state.plumbers} />
            < AddPlumber addPlumber ={this.addPlumber} />

        </div>
        );
    }
    }

export default Plumbers;