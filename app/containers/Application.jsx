import React from "react";
import { RouteHandler } from "react-router";
import MainMenu from "components/MainMenu";

if (typeof window !== 'undefined') {
    //require("!style!css!less!../styles/global.less");
    //import "../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
}

//import "!style!css!less!../styles/global.less";
import "../styles/global.less";


import styles from "./Application.css";

export default class Application extends React.Component {
    static getProps(stores, params) {
        return {
            loading: false
        }
        //var transition = stores.Router.getItem("transition");
        //return {
        //    loading: !!transition
        //};
    }

    render() {

        var { loading } = this.props;
        return <div className={styles.this + (loading ? " " + styles.loading : "")}>
            <div className={styles.loadingElement}>loading...</div>
            <MainMenu />
            <button className="btn btn-default">hello</button>
            <RouteHandler />
        </div>;
    }
}

Application.contextTypes = {
    stores: React.PropTypes.object
};
