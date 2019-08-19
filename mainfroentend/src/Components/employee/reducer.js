const initial_state = {
    error: false,
    employeeDetails:[],
    editdata:[],
    isLoading: false
}


const empolyeeReducer = (state=initial_state, action) => {
    switch (action.type) {
        case 'EDIT_EMPLOYEE_REQUEST':
            return {
            ...state,
                editdata: [],
                error: false
            }
        case 'EDIT_EMPLOYEE_SUCCESS':
            return {
                ...state,
                    editdata: action.payload.data[0],
                    msg: action.payload.msg,
                    error: false
            }
        case 'EDIT_EMPLOYEE_FAILED':
            return {
                ...state,
                msg: action.payload.msg,
                error: true
            }
        case 'ADD_NEW_EMPLOYEE_REQUEST':
            return {
                ...state,
                msg: '',
                error: false,
                isLoading: true
            }
        case 'ADD_NEW_EMPLOYEE_SUCCESS':
            return {
                ...state,
                editdata: [],
                msg: action.payload.msg,
                error: false,
                isLoading: false
            }
        case 'ADD_NEW_EMPLOYEE_FAILED':
            return {
                ...state,
                msg: action.payload.msg,
                error: true,
                isLoading: false
            }
        case 'REMOVE_EMPLOYEE_REQUEST':
            return {
                ...state,
                isLoading : true,  
                removeMsg: '',
                error: false
            }
        case 'REMOVE_EMPLOYEE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                removeMsg: 'deleted',
                error: false
            }
        case 'REMOVE_EMPLOYEE_FAILED':
            return {
                ...state,
                isLoading: false,
                removeMsg: action.payload.msg,
                error: true
            }
        case 'MODIFY_EMPLOYEE_REQUEST':
            return {
                ...state,
                isLoading: true,
                msg: '',
                error: false
            }
        case 'MODIFY_EMPLOYEE_SUCCESS':
            return {
                ...state,
                // editdata: [],
                isLoading: false,
                msg: action.payload.msg,
                error: false
            }
        case 'MODIFY_EMPLOYEE_FAILED':
            return {
                ...state,
                msg: action.payload.msg,
                isLoading: false,
                error: true
            }
        case 'GET_EMPLOYEE_REQUEST':
            return {
                ...state,
                isLoading: true,
                employeeDetails: [],
                msg: '',
                error: false
            }
        case 'GET_EMPLOYEE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                employeeDetails: action.payload.data,
                msg: action.payload.msg,
                error: false
            }
        case 'GET_EMPLOYEE_FAILED':
            return {
                ...state,
                employeeDetails: [],
                isLoading: false,
                msg: action.payload.msg,
                error: true
            }
      default:
        return state
    }
  }
  
  export default empolyeeReducer
  