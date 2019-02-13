import React, { Component } from "react";
import ReactDOM from "react-dom";
import A from '../components/A.js';
import '../css/app.css'
import SelectScreen from "../components/selectScreen.js";

class HelloMessage extends Component {
    render() {
        return <div className="application">
            <div className="screen-container">
                <SelectScreen></SelectScreen>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage/>, App);