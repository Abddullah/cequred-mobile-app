import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    DATA: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.DATA:
            return ({
                ...state,
                DATA: action.payload
            })
        default:
            return state;
    }

}