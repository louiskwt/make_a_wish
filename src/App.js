import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import WishList from './components/WishList/WishList';
import Login from './components/Login/Login';

function App() {
	return (
		<div className='app-container'>
			<Routes>
				<Route path='/' element={<WishList />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
