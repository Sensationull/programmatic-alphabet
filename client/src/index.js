import React, { Component } from "react";
import ReactDOM from "react-dom";
import A from '../components/A.js';
import '../css/app.css'

class HelloMessage extends Component {
    render() {
        return <div>
            <div className="container">
                <A></A>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yoshi" />, App);