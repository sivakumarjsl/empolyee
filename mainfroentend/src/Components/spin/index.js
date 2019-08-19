import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Spin } from 'antd';

class Loading extends Component {
    render() {
        const {isLoading} =this.props
		return (
            <div style={{textAlign: 'center'}}>
                {isLoading ?
                    <Spin tip="Loading..." />:
                '' }
            </div>
        );
	}
}

const mapStateToProps = (state) => {
	return {
	  isLoading: state.employee.isLoading,
	};
};

export default connect(mapStateToProps, null)(Loading);

