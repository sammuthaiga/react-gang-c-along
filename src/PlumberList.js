import React, { Component } from "react";

class PlumberList extends Component {
    render() {
        const { plumbers } = this.props;
        const plumberList = plumbers.map(plumber => {
            return (
                <div className="plumber" key={plumber.id}>
                    <div style={{display: "inline-block", margin: "2px", border:"2px solid black"}}>Name: {plumber.name}</div>
                    <div style={{display: "inline-block", margin: "2px", border:"2px solid black"}}>Age: {plumber.age}</div>
                    <div style={{display: "inline-block", margin: "2px", border:"2px solid black"}}>Speciality: {plumber.speciality}</div>
                    <div style={{display: "inline-block", margin: "2px", border:"2px solid black"}}>Phone No: {plumber.phoneNo}</div>
                    <div style={{display: "inline-block", margin: "2px", border:"2px solid black"}}>Location: {plumber.location}</div>
                    <div style={{display: "inline-block", margin: "2px", border:"2px solid black"}}>Rate: {plumber.rate}</div>
                </div>
            );
        });
        
        return (
            <div className="plumber-list">
                <h1>List of all available plumbers</h1>
                {plumberList}
            </div>
        );
    }
}

export default PlumberList;