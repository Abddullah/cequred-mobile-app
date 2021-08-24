import reducer from './reducer';
import contentReducer from './contentReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    authreducer: reducer,
    contentReducer: contentReducer
});

