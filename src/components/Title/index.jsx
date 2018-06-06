import React from 'react';
import { connect } from 'react-redux'
import './style.css'

const Title = ({ title, artist }) => {
	return (
		<div className="title">
			<h1>
				<span>{title}</span>
				{artist}
			</h1>
		</div>
	);
}

const mapStateToProps = ({ track: { title_short, artist } }) => ({
    title: title_short,
    artist: artist.name
})

export default connect(mapStateToProps)(Title)