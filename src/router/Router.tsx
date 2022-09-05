import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie';

useParams;

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:movieId' element={<Movie />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
