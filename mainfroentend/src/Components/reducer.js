import { combineReducers , } from 'redux'
import employeeReducer  from './employee/reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    employee: employeeReducer,
    form: formReducer
})