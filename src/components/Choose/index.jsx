import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Choose = () => (
  	<nav className="choose">
		<NavLink to="/artist" activeClassName="active">
			<button>
				<i className="far fa-user"></i>
				<p>Artist</p>
			</button>
		</NavLink>
		<NavLink to="/top" activeClassName="active">
			<button>
				<i className="fas fa-music"></i>
				<p>Playlists</p>
			</button>
		</NavLink>
		<NavLink to="/search" activeClassName="active">
			<button>
				<i className="fas fa-search"></i>
				<p>Search</p>
			</button>
		</NavLink>
	</nav>
);

export default Choose
