const INITIAL_STATE = {
    ListOfUsers: undefined
}
const AppReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIST_OF_USERS': return {
            ...state,
            ListOfUsers: action.payload
        }
        default: return state;
    }
}
export default AppReducer;