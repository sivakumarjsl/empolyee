import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import amtex from './../assets/amtex-Logo.png';
import MainContent from './MainContent'

const { SubMenu } = Menu;
const { Content, Sider , Footer} = Layout;

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  key: false
		};
	  }

	about=() => {
		this.setState({
			key: true
		})
	}

	employee=()=> {
		this.setState({
			key:false
		})
	}
	render() {
		return (
			<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
				<Menu
					onClick={this.handleClick}
					mode="inline"
					defaultSelectedKeys={["1"]}
					// defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<SubMenu
					key="sub1"
					title={
						<span>
						<Icon type="user" />
						MENU
						</span>
					}
					>
					<Menu.Item onClick={this.about} key="1">About US</Menu.Item>
					<Menu.Item onClick={this.employee} key="2">Current page</Menu.Item>

					</SubMenu>
				</Menu>
				</Sider>
			
				<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>
					<a href="/">Home</a></Breadcrumb.Item>
				</Breadcrumb>
				
				<Content
					style={{
					background: '#fff',
					padding: 24,
					margin: 0,
					minHeight: 280,
					}}
				>
					{ !this.state.key ?
					<MainContent key={false}/> :
					<div style={{textAlign:"center"}}>Welcome to our website</div>
					}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<div className="logo" >
						<img size={100} width={100} src={amtex} alt='amtex'></img>
					</div>
				</Footer>

				</Layout>
			</Layout>
		);
	}
}