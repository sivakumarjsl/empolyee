const initial_state = {
    error: false,
    employeeDetails:[],
    editdata:[]
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
                    error: false
            }
        case 'ADD_NEW_EMPLOYEE_SUCCESS':
            return {
                ...state,
                    editdata: [],
                    msg: action.payload.msg,
                    error: false
            }
        case 'ADD_NEW_EMPLOYEE_FAILED':
            return {
                ...state,
                
                    msg: action.payload.msg,
                    error: true
                }
        case 'REMOVE_EMPLOYEE_REQUEST':
            return {
            ...state,

                    removeMsg: '',
                    error: false
                }
        case 'REMOVE_EMPLOYEE_SUCCESS':
            return {
                ...state,
                    removeMsg: 'deleted',
                    error: false
                }
        case 'REMOVE_EMPLOYEE_FAILED':
            return    {
                ...state,

                    removeMsg: action.payload.msg,
                    error: true
                }
        case 'MODIFY_EMPLOYEE_REQUEST':
            return {
            ...state,
                
                    msg: '',
                    error: false
                }
        case 'MODIFY_EMPLOYEE_SUCCESS':
            return {
                ...state,
                    editdata: [],
                    msg: action.payload.msg,
                    error: false
            }
        case 'MODIFY_EMPLOYEE_FAILED':
            return {
                ...state,
                    msg: action.payload.msg,
                    error: true
                }
        case 'GET_EMPLOYEE_REQUEST':
            return {
            ...state,
                    employeeDetails: [],
                    msg: '',
                    error: false
            }
        case 'GET_EMPLOYEE_SUCCESS':
            return {
                ...state,
                    employeeDetails: action.payload.data,
                    msg: action.payload.msg,
                    error: false
                }
        case 'GET_EMPLOYEE_FAILED':
            return {
                ...state,
                    employeeDetails: [],
                    msg: action.payload.msg,
                    error: true
            }
      default:
        return state
    }
  }
  
  export default empolyeeReducer
  