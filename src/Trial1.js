import React, { Component } from "react";
import Trial2 from "./Trial2";

class Trial1 extends Component {
    render() {
        return (
        <div>
            <h1>I am A trial component1</h1>
        <Trial2 name="Samido" specialization = "Drainage Plumbing" rate="$ 20 per hour" location="Nairobi" phoneNumber="0720001002" />
        </div>
        );
    }
    }

export default Trial1;