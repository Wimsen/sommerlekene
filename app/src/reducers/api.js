const apireducer = (state = "", action) => {
    switch (action.type) {
        case "API_ERROR":
            return action.errormessage;
            break;
        default:
            return "";
    }
};

export default apireducer;
