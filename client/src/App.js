import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Layout from './components/layout/Layout';
import Product from './components/product/Product';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Layout} />
				<Route exact path='/products/:productid' component={Product} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
