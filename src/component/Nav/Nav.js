import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component{
	render(){
		return(
	
				<div className="topnav">
					<NavLink activeClassName="active" to="/" exact>Home</NavLink>
					<NavLink activeClassName="active" to="/contract">Hợp đồng</NavLink>
					<NavLink activeClassName="active" to="/listAttribute">Attribute</NavLink>
				</div>
		)
	}
}

export default Nav;