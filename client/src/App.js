import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Layout from './components/layout/Layout';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Layout />
			<Footer />
		</Router>
	);
};

export default App;
