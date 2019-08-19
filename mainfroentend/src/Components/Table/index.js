import React, { Component } from 'react';
import { Table, Divider, Button } from 'antd';
import { connect } from 'react-redux';
import Loading from '../spin/index'
import {  removeEmployee, getEmployee, editEmployee } from '../employee/actions';

import './Style.css'

class Tables extends Component {
	constructor(props) {
		super(props);
		this.state = {
		initialvalue:  {Name: '', present_address: '', communication_address: '', doj:'' }
		};
  	}
	componentWillMount = () => {
		this.props.getAll()
	}
	componentDidMount=() => {
		this.props.getAll()
	}
	
	createNewEmpolyee = () => {
		this.props.history.push('/create-employee');
	}

	editValue = (id) => {
		this.props.edit(id)
		this.props.history.push(`/modify-employee/${id}`);
	}

    render() {
      	const columns = [ 
			{title: 'Id', dataIndex: 'id', key: 'id'},
			{ title: 'Name', dataIndex: 'name', key: 'name'},
			{ title: 'Date of Join',align:'left', dataIndex: 'doj', key: 'doj' },
			{ title: 'Communication Address', align:'left',  dataIndex: 'communication_address', key: 'communication_address' },
			{ title: 'Present Address', dataIndex: 'current_address', key: 'current_address' },
			{
				title: 'Action',
				dataIndex: '',
				key: 'x',
				render: (text, record) => (<span>
				<Button  onClick={()=>this.editValue(record.id)}>Modify</Button>
				<Divider />
				<Button onClick={()=>this.props.remove(record.id)}>Delete</Button>
				</span>
				)
			},
        ];
        const data = this.props.employees
          
		return (
			<div>
				{this.props.isload ?
				<Loading /> :
				<div>
					<Button onClick={this.createNewEmpolyee} type='primary'>ADD</Button>
					<Table rowKey={record => record.id} pagination={{ pageSize: 10 }} scroll={{ y: 240 }}
					columns={columns} dataSource={data.length ? data :[]} />
				</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	  employees: state.employee.employeeDetails,
	  editData: state.employee,
	  isload: state.employee.isLoading
	};
};


const mapDispatchToProps = dispatch => {
  return {
    getAll: () => {
        dispatch(getEmployee({}));
    },
    remove: (id) => {
	  dispatch(removeEmployee({id}));
    },
    edit: (id) => {
      dispatch(editEmployee({id}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);

