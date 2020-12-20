import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" /** add some more to show how the app now expands when there's new data */
};
var animalsKeys = Object.keys(emojis);
export default function App() {
	const [userInputMeaning, emojiMeaning] = useState("");

	function emojiInput(e) {
		var Input = e.target.value;
		var meaning = emojis[Input];
		if (meaning === undefined) {
			meaning = "Not Found in Database";
		}
		emojiMeaning(meaning);
	}

	function emojiClickHandler(animal) {
		var meaning = emojis[animal];
		emojiMeaning(meaning);
	}

	return (
		<div className="App">
			<h1>Emoji finder </h1>
			<input onChange={emojiInput} />
			<h2>{userInputMeaning}</h2>
			<h2>What we know</h2>
			{animalsKeys.map(function (keys) {
				return (
					<span onClick={() => emojiClickHandler(keys)}>{keys}</span>
				);
			})}
		</div>
	);
}