import React, { Component } from 'react';
import Tables from './Table/index'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import creatEmployee from './formComponent/index'

class MainContent extends Component {
    render() {
		return (
          	<Router>
				<div>
					<Route exact path="/" component={Tables} />
					<Route path="/create-employee" component={creatEmployee} />
					<Route path="/modify-employee" component={creatEmployee} />
				</div>
          	</Router>
        )
    }
}

export default (MainContent);

