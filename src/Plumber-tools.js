import React, { Component } from "react";
import ToolSpecs from "./Tool-specs";

class Plumber extends Component {
    render() {
        return (
            <div>
                <ToolSpecs price="USD 10" availability="available" location="Nyeri" warranty="1 years" />  
            </div>
        );
    }
    }
export default Plumber;