import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signout } from '../../actions';

export default function Header(props) {
	const auth = useSelector((state) => state.auth);
	const dispath = useDispatch();

	const logout = () => {
		dispath(signout());
	};

	const renderLoggedInLinks = () => {
		return (
			<Nav>
				<li className="nav-item">
					<NavLink style={{ color: 'azure' }} to="profile" className="nav-link">
						Profile
					</NavLink>
				</li>
				<li className="nav-item">
					<span style={{ color: 'azure' }} onClick={logout} className="nav-link logout">
						De&#769;connecter
					</span>
				</li>
			</Nav>
		);
	};
	const renderNonLoggedInLinks = () => {
		return (
			<Nav>
				<li className="nav-item">
					<NavLink style={{ color: 'azure' }} to="signin" className="nav-link">
						Se Connecter
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink style={{ color: 'azure' }} to="signup" className="nav-link">
						Cre&#769;er Compte
					</NavLink>
				</li>
			</Nav>
		);
	};

	return (
		<Navbar collapseOnSelect fixed="top" expand="lg" style={{ zIndex: '1', background: '#013535', color: 'azure' }}>
			<Container fluid style={{ color: 'azure' }}>
				<Link to="/" style={{ color: 'azure' }} className="navbar-brand" href="#home">
					MimiShop Commande
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>

					{auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
