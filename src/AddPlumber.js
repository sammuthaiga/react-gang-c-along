import React, { Component } from "react";

class AddPlumber extends Component {
    state = {
        name: null,
        age: null,
        speciality: null,
        phoneNo: null,
        location: null,
        rate: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlumber(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="name">Speciality:</label>
                    <input type="text" id="speciality" onChange={this.handleChange} />
                    <label htmlFor="name">Phone No:</label>
                    <input type="text" id="phoneNo" onChange={this.handleChange} />
                    <label htmlFor="name">Location:</label>
                    <input type="text" id="location" onChange={this.handleChange} />
                    <label htmlFor="name">Rate:</label>
                    <input type="text" id="rate" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPlumber;
