import React from "react";
import moment from 'moment';
import Loading from '../spin/index'
import { connect } from 'react-redux'
import { Field, reduxForm } from "redux-form";
import { Form, Input, Button, DatePicker, Spin  } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component value={null} {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);
const ATextarea = makeField(TextArea);
const ASpin= makeField(Spin)
const ADatePicker = makeField(DatePicker);


const EmpolyeeForm = props => {
  const { handleSubmit, pristine, reset, submitting, isLoad } = props;
  return (
    <div>
      	{
		isLoad ?
        	<Loading />
		:
      	<Form onSubmit={handleSubmit(props.submitData)}>
        	<Field label="Name" name="name" component={AInput} placeholder="Name" hasFeedback />
			<Field
			label="Date of joining "
			name="doj"
			component={ADatePicker}
			placeholder="date of joining"
			hasFeedback
			onFocus={e => e.preventDefault()}
			onBlur={e => e.preventDefault()}
			/>
        	<Field label="Present Address" name="present_address" component={ATextarea} />
        	<Field label="Communication Address" name="communication_address" component={ATextarea} />
        	<FormItem >
				<Button type="primary" disabled={pristine || submitting} htmlType="submit" style={{ marginRight: "10px" }}>
					Submit
				</Button>
				<Button disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</Button>
				<br />
			</FormItem>
	  	</Form> 
		}
    </div>
  );
};

const validate = values => {
	const errors = {};
	if (!values.Name) {
		errors.Name = "Required";
	} else if(!/^[a-zA-Z]*$/g.test(values.Name)) {
		errors.Name = "Please enter a alphabet";
	}
	if (!values.present_address) {
		errors.present_address = "Required";
	} else if(!/^[a-zA-Z0-9\s,'-]*$/g.test(values.present_address)) {
		errors.present_address = "Please enter a alphabet";

	}
	if (!values.communication_address) {
		errors.communication_address = "Required";
	} else if(!/^[a-zA-Z0-9\s,'-]*$/g.test(values.communication_address)) {
		errors.communication_address = "Please enter a alphabet";
	}
	if (!values.doj) {
		errors.doj = "Required";
	} 
	return errors;
};


const mapStateToProps = (state, ownProps) => {
  	return {
	  isLoad: state.employee.isLoading,
		initialValues: {
			name:  state.employee.editdata.name,
			present_address: state.employee.editdata.current_address,
			communication_address: state.employee.editdata.communication_address ,
			doj:  state.employee.editdata.doj === undefined  ? null :  moment(state.employee.editdata.doj, 'YYYY-MM-DD')
		}
	}
}

export default connect(mapStateToProps)(reduxForm({ form: 'empolyee', validate, enableReinitialize: true})(EmpolyeeForm))
