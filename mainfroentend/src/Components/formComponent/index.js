import React, { Component } from 'react';
import EmpolyeeForm from '../Create';

import ErrorComp from '../ErrorComponent';
import { connect } from 'react-redux';
import { addEmployee, modifyEmployee, editEmployee } from '../employee/actions';

class creatEmployee extends Component {
  	constructor(props) {
	super(props);
		this.state = {
			id: this.props.location.pathname.slice(17),
      	};
    }

	componentWillMount =()=> {
		const { id } =this.state
		this.props.edit(id)	
	}
	componentDidMount =()=> {
		const { id } =this.state
		this.props.edit(id)	
	}

	modEmployee=(e)=> {
		this.props.modify(e, this.state.id)
	}
  
    render() {
     	 const { newEmpolyee, match, editDataval, isload }= this.props
		  return (
			<div>
				{match.path==='/create-employee' ?

				    <EmpolyeeForm editDataval={editDataval} submitData={newEmpolyee } formName=  'create'/>
				:
				editDataval === undefined ?
				<ErrorComp /> :
				<EmpolyeeForm editDataval={editDataval} submitData={this.modEmployee } formName='edit'/>
				
				}	
			</div>
			
			)
    }
}

const mapStateToProps = (state) => {
	return {
		isload: state.employee.isLoading,
		editData: state.employee.employeeDetails,
		editDataval: state.employee.editdata
	};
};

const mapDispatchToProps = dispatch => {
  	return {
		newEmpolyee: (values) => {
			dispatch(addEmployee({values}));

		},
    	modify: (values, id) => {
      		dispatch(modifyEmployee({values, id}));
		},
		edit: (id) => {
			dispatch(editEmployee({id}));
		}
  	};
};

export default connect(mapStateToProps, mapDispatchToProps)(creatEmployee);
