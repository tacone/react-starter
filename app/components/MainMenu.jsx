import React from "react";
import { Link } from "react-router";
import ReactLogo from "elements/ReactLogo";

//<ReactLogo type="svg" /> <ReactLogo type="png" /> <ReactLogo type="jpg" />

export default class MainMenu extends React.Component {
                //<a class="navbar-brand" href="#">Brand</a>
    render() {
        return <nav className="navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><Link to="home">home</Link></li>
                    <li><Link to="some-page">some page</Link></li>
                    <li><Link to="readme">README.md</Link></li>
                </ul>
            </div>
        </nav>;
    }
}
