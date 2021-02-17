import './App.css';

import { useState, useEffect } from 'react';
import { interval } from 'rxjs';

import Header from './components/header';
import InputSearch from './components/inputSearch';

const observable$ = interval(1000);

function App() {
	const [ state, setState ] = useState();

	useEffect(() => {
		const sub = observable$.subscribe(setState);
		return () => sub.unsubscribe(); 
	}, []);

	return (
		<div className="App">
			<div className="display"> { state } </div>

			{/* <Header /> */}
			{/* <InputSearch /> */}
		</div>
	);
}; 

export default App;