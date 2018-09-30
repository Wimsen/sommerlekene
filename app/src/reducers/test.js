let initialState = [];

const testReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "TEST_FETCH_SUCCEEDED":
            console.log("Succeeded");
            return action.data;
        default:
            return state;
    }
};

export default testReducer;
