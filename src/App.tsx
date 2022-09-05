import DataProvider from './context/DataContext';
import Router from './router/Router';

const App = () => {
	return (
		<DataProvider>
			<Router />
		</DataProvider>
	);
};

export default App;
