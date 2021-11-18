import { StrictMode, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import FetchData from './components/FetchData/FetchData';
import './App.css';
import TotalContext from './TotalContext';

const App = () => {
	const total = useState(0);

	const DisplayTotal = () => {
		let total = useContext(TotalContext);
		total = total[0].toFixed(2);
		return (
			<h1>
				Cost <span>€{total}</span>
			</h1>
		);
	};

	return (
		<TotalContext.Provider value={total}>
			<div className="container">
				<div className="header">
					<header>
						<DisplayTotal />
					</header>
				</div>
				<FetchData />
			</div>
		</TotalContext.Provider>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
