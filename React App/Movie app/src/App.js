import React, { useState } from "react";
import "./styles.css";

const movieDB = {
	Action: [
		{
			name: "Angel Has Fallen",
			rating: 6.4
		},
		{
			name: "Wonder Woman",
			rating: 7.4
		},
		{
			name: "Bloodshot",
			rating: 5.7
		}
	],
	"Sci-Fi": [
		{
			name: "The Expanse",
			rating: 8.5
		},
		{
			name: "Westworld",
			rating: 8.7
		},
		{
			name: "Agents of S.H.I.E.L.D.",
			rating: 7.5
		}
	],
	Fantasy: [
		{
			name: "His Dark Materials",
			rating: 7.9
		},
		{
			name: "Artemis Fowl",
			rating: 4.2
		},
		{
			name: "Cursed",
			rating: 5.8
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
				<h1>What to Watch Today</h1>
			</nav>
			<div>
				<h3>Select your Genre and we will recommend you with some good stuff:</h3>
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