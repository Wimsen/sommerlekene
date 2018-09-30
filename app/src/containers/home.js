import React, { Component } from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as testActions from "../actions/test";

class Home extends Component {
    componentWillMount() {
        console.log(this.props);
        this.props.testAction();
    }

    render() {
        return <div>{this.props.data ? <div>we got tat</div> : <div />}</div>;
    }
}

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = {
    ...testActions
};

export default connect(
    null,
    mapDispatchToProps
)(Home);
