import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {filmsReducer} from "./reducers/filmsReducer";
import {infoReducer} from "./reducers/infoReducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    info: infoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))