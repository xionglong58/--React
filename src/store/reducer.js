
import { combineReducers } from "redux-immutable";

import { reducer as HeaderReducer } from "../common/header/store";
import {reducer as TopicReducer} from '../pages/home/store';

const reducer = combineReducers({ 
    header: HeaderReducer ,
    home:TopicReducer
});

export default reducer;
