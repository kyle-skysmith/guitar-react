import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';

import Free from './Pages/Free';
import Home from './Pages/Home';
import Lessons from './Pages/Lessons';


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/Free' element={<Free />} />
				<Route path='/Lessons' element={<Lessons />} />
			</Routes>
		</Router>
	);
}

export default App;
