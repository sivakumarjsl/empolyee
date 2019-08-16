import axios from 'axios';
import { reset } from  'redux-form';
import { GET_EMPLOYEE_REQUEST, 
        GET_EMPLOYEE_SUCCESS, 
        GET_EMPLOYEE_FAILED, 
        ADD_NEW_EMPLOYEE_SUCCESS, 
        ADD_NEW_EMPLOYEE_FAILED,
        ADD_NEW_EMPLOYEE_REQUEST,
        REMOVE_EMPLOYEE_REQUEST,
        REMOVE_EMPLOYEE_SUCCESS,
        REMOVE_EMPLOYEE_FAILED,
        MODIFY_EMPLOYEE_REQUEST, 
        MODIFY_EMPLOYEE_SUCCESS,
        MODIFY_EMPLOYEE_FAILED,
        EDIT_EMPLOYEE_REQUEST,
        EDIT_EMPLOYEE_SUCCESS,
        EDIT_EMPLOYEE_FAILED

} from  './actionTypes';

export const getEmployee = () => {
	return dispatch => {
		dispatch(getEmployeeStarted());
		axios
		.get(`http://localhost:4000/employee/getEmployee`, {
		})
		.then(res => {
			dispatch(getEmployeeSuccess(res.data));
		})
		.catch(err => {
			dispatch(getEmployeeFailure(err.message));
		});
	};
};

export const editEmployee = (id) => {
	return dispatch => {
		dispatch(editEmployeeStarted());
		axios
		.get(`http://localhost:4000/employee/editEmployee/${id.id}`, {
		})
		.then(res => {
			dispatch(editEmployeeSuccess(res.data));
		})
		.catch(err => {
			dispatch(editEmployeeFailure(err.message));
		});
	};
};

const editEmployeeSuccess = data => ({
  	type: EDIT_EMPLOYEE_SUCCESS,
	payload: {
		data,
        msg:'edit detailes get success'
    }
});

const editEmployeeStarted = () => ({
  	type: EDIT_EMPLOYEE_REQUEST
});

const editEmployeeFailure = error => ({
  	type: EDIT_EMPLOYEE_FAILED,
  	payload: {
    	error
  	}
});

const getEmployeeSuccess = data => ({
  	type: GET_EMPLOYEE_SUCCESS,
	payload: {
		data,
		msg:'get employee success'
	}
});

const getEmployeeStarted = () => ({
  	type: GET_EMPLOYEE_REQUEST
});

const getEmployeeFailure = error => ({
	type: GET_EMPLOYEE_FAILED,
	payload: {
		error
	}
});



export const addEmployee = ({values}) => {
	return dispatch => {
		dispatch(addEmployeeStarted());
		axios
		.post(`http://localhost:4000/employee/addEmployee`, {
			values
		})
		.then(res => {
			dispatch(addEmployeeSuccess(res.data));
			dispatch(reset('empolyee'))
		})
		.catch(err => {
			dispatch(addEmployeeFailure(err.message));
		});
	};
};

const addEmployeeSuccess = data => ({
	type: ADD_NEW_EMPLOYEE_SUCCESS,
	payload: {
		data
	}
});

const addEmployeeStarted = () => ({
  	type: ADD_NEW_EMPLOYEE_REQUEST
});

const addEmployeeFailure = error => ({
	type: ADD_NEW_EMPLOYEE_FAILED,
	payload: {
		error
	}
});


export const removeEmployee = ({id}) => {
	return dispatch => {
		dispatch(removeEmployeeStarted());
		axios
		.delete(`http://localhost:4000/employee/removeEmployee/${id}`, { 
		})
		.then(res => {
			dispatch(getEmployee({}));
			dispatch(removeEmployeeSuccess(res.data));
		})
		.catch(err => {
			dispatch(removeEmployeeFailure(err.message));
		});
	};
};

const removeEmployeeSuccess = data => ({
  	type: REMOVE_EMPLOYEE_SUCCESS,
	payload: {
		data
	}
});

const removeEmployeeStarted = () => ({
  	type: REMOVE_EMPLOYEE_REQUEST
});

const removeEmployeeFailure = error => ({
	type: REMOVE_EMPLOYEE_FAILED,
	payload: {
		error
	}
});

export const modifyEmployee = ({values, id}) => {
	return dispatch => {
		dispatch(modifyEmployeeStarted());
		axios
		.put(`http://localhost:4000/employee/modifyEmployee/${id}`, {
			values
		})
		.then(res => {
			dispatch(getEmployee({}));
			dispatch(modifyEmployeeSuccess(res.data));
		})
		.catch(err => {
			dispatch(modifyEmployeeFailure(err.message));
		});
	};
};

const modifyEmployeeSuccess = data => ({
	type: MODIFY_EMPLOYEE_SUCCESS,
	payload: {
		data
	}
});

const modifyEmployeeStarted = () => ({
  	type: MODIFY_EMPLOYEE_REQUEST
});

const modifyEmployeeFailure = error => ({
	type: MODIFY_EMPLOYEE_FAILED,
	payload: {
		error
	}
});