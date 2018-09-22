import {combineReducers} from 'redux'

const counter = (state=0, action) => {
    switch(action.type){
        case 'ADD_NUMBER_ASYNC': return state + action.num
        case 'REDUCE_NUMBER': return state - action.num
        default:
            return state
    }
}

export default combineReducers({counter})