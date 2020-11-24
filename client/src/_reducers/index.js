import { combineReducers } from 'redux'
import member from './member_reducer'

const rootReducer = combineReducers({
    member
})

export default rootReducer;