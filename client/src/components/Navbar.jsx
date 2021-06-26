<<<<<<< Updated upstream
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import UserAPI from '../utils/UserAPI';
import { UserContext } from '../utils/UserContext';
import logo from './logo.svg';

function Navbar() {
	const [loggedIn, setLoggedIn] = useContext(UserContext);

	const handleLogout = (e) => {
		e.preventDefault();
		UserAPI.logout();
		setLoggedIn(false);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<h1 id="logoMain" href="/">
				<img src={logo} style={{ height: '50px' }}></img>YouTube.Live
			</h1>
			<button
				className="navbar-toggler border-0"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbar"
				aria-controls="navbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse text-center" id="navbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link page-scroll" to="/features">
							Feature
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/service">
							Service
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link page-scroll" to="/team">
							Team
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link page-scroll" to="/pricing">
							Pricing
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/contact">
							Contact
						</Link>
					</li>
					<li className="nav-item">
						{!loggedIn ? (
							<Link className="nav-link" to="/login">
								Login
							</Link>
						) : (
							<Link
								className="nav-link"
								to="/"
								onClick={(e) => handleLogout(e)}
							>
								Logout
							</Link>
						)}
					</li>
				</ul>
				<Link to="#" className="btn btn-primary ml-lg-3 primary-shadow">
					Try Free
				</Link>
			</div>
		</nav>
	);
=======
import React from 'react';
import '../App.css'

const Navbar = () => 
{
    return(
        <nav class="main-navigation">
            <button type="button" class="toggle-menu"><i class="fa fa-bars"></i></button>
            <ul class="menu">
                <li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
                <li class="menu-item"><a href="about.html">About</a></li>
                <li class="menu-item"><a href="gallery.html">Gallery</a></li>
                <li class="menu-item"><a href="download.html">Download</a></li>
                <li class="menu-item"><a href="blog.html">Blog</a></li>
                <li class="menu-item"><a href="contact.html">Contact</a></li>
            </ul> 
        </nav>
    )
>>>>>>> Stashed changes
}

export default Navbar;


