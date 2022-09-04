import { useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState(0);
	const counterHandler = () => {
		setCounter(counter + 1);
	};
	return (
		<main className='w-screen h-screen flex flex-col items-center justify-center gap-10'>
			<h1 className='text-3xl font-bold'>herlnd's Vite App</h1>
			<p className='text-lg font-semibold'>
				React 18, TypeScript, Tailwind 3 w/ Daisy UI, React Router v6
			</p>

			<div className='w-10 h-10 border-2 flex items-center justify-center  border-slate-100 rounded-full p-8'>
				<span className='text-xl font-bold'>{counter}</span>
			</div>
			<button className='btn btn-primary' onClick={counterHandler}>
				Increase Counter
			</button>
		</main>
	);
};

export default App;
