const loggedInReducer = (state = [], action) => {
    debugger
    switch (action.type) {
        case "LOGGED_IN":
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default loggedInReducer;