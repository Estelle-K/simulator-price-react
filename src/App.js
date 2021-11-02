import { StrictMode, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import FetchData from './components/FetchData/FetchData.js';
import './App.css';

const App = () => {

	return (
		<FetchData />
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
