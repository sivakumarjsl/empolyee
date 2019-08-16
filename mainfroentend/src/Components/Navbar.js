import React, { Component } from 'react';
import { Layout} from 'antd';
import amtex from './../assets/amtex-Logo.png';

const { Header } = Layout;

export default class Navbar extends Component {
  	render() {
    	return (
			<Layout>
				<Header className="header">
				<div className="logo" >
					<img size={80} width={80} src={amtex} alt='amtex'></img>
				</div>
				</Header>
			</Layout>
		)
	}
};