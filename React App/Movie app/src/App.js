import React, { useState } from "react";
import "./styles.css";

const movieDB = {
	Action: [
		{
			name: "6 Underground",
			rating: 6.0
		},
		{
			name: "Avengers",
			rating: 8.4
		},
		{
			name: "Bumblebee",
			rating: 5.6
		},
		{
			name: "Wonder Woman",
			rating: 7.4
		}
	],
	Romantic:[
		{
			name: "The Spectaculer Now",
			rating: 7.0
		},
		{
			name: "Love & other drugs",
			rating: 8.2
		},
		{
			name: "The Kissing Booth",
			rating: 7.2
		},
		{
			name: "You & me",
			rating: 7.5
		}
	],
	Fantasy: [
		{
			name: "Harry Potter",
			rating: 7.9
		},
		{
			name: "The Witcher",
			rating: 7.2
		},
		{
			name: "Lord of the rings",
			rating: 7.2
		},
		{
			name: "Game of Thrones",
			rating: 8.8
		}
	]
};

export default function App() {
	const [movie, setMovie] = useState("Action");
	function onClickRecommend(genre) {
		setMovie(genre);
	}
	return (
		<div className="App">
			<nav>
				<h1>What to watch next ?</h1>
			</nav>
			<div>
				<h3>Select your Genre and we will recommend you :</h3>
				{Object.keys(movieDB).map((genre) => (
					<button
						className="genre"
						onClick={() => onClickRecommend(genre)}
					>
						{genre}
					</button>
				))}
			</div>
			<hr/>
			<div className="recomend">
				<ul className="list">
					{movieDB[movie].map((movies) => (
						<li className="items"><div>Name: {movies.name}</div>
						<div>Ratings: {movies.rating}/10</div>
						</li>
					))}
				</ul>
			</div>
			
		</div>
	);
}