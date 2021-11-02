import { StrictMode, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {

	return (
		<h1>hello world !</h1>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
