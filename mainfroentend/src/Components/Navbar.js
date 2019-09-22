import React, { Component } from 'react';
import { Layout} from 'antd';
import siva from './../assets/favicon.ico';


const { Header } = Layout;

export default class Navbar extends Component {
  	render() {
    	return (
			<Layout>
				<Header className="header">
				<div className="logo" >
					<img size={40} width={40} src={siva} alt='amtex'></img>
				</div>
				</Header>
			</Layout>
		)
	}
};