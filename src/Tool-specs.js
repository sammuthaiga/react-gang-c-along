import React, { Component } from 'react';

class ToolSpecs extends Component {
    render() {
        const { price, availability, location, warranty } = this.props;

        return (
           <div>
            <h1>All we know: </h1>
            <div>
                <div style={{ marginLeft: '50px', border: '2px solid lightblue' }}>Price: {price}</div>
                <div style={{ marginLeft: '50px', border: '2px solid lightblue' }}>Availability: {availability}</div>
                <div style={{ marginLeft: '50px', border: '2px solid lightblue' }}>Location: {location}</div>
                <div style={{ marginLeft: '50px', border: '2px solid lightblue' }}>Warranty: {warranty}</div>
            </div>

           </div>
        );
    }
}
export default ToolSpecs;