import { connect } from "react-redux";

const testlistener = props => {
    console.log(props.errormessage);
    return null;
};

const mapStateToProps = state => {
    console.log(state);
    return {
        errormessage: state.api
    };
};

export default connect(mapStateToProps)(testlistener);
