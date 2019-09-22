import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import siva from './../assets/favicon.ico';
import MainContent from './MainContent'
import ImageUpload from './imageUpload'


const { SubMenu } = Menu;
const { Content, Sider, Footer } = Layout;

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: false,
			upload: false

		};
	}

	about = () => {
		this.setState({
			key: true,
			upload: false

		})
	}

	employee = () => {
		this.setState({
			key: false,
			upload: false
		})
	}

	imageUpload = () => {
		this.setState({
			upload: true,
			key: true,

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
							<Menu.Item onClick={this.employee} key="2">Current Page</Menu.Item>
							<Menu.Item onClick={this.imageUpload} key="3">Image Upload</Menu.Item>

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
						{!this.state.key ?
							<MainContent key={false} /> :

							this.state.upload ? <ImageUpload /> :
								<div style={{ textAlign: "center" }}>Welcome to our website</div>
						}
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						<div className="logo" >
							<img size={60} width={60} src={siva} alt='amtex'></img>
						</div>
					</Footer>

				</Layout>
			</Layout>
		);
	}
}