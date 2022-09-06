import { createContext, PropsWithChildren, useState } from 'react';
import { MovieDetailsType } from '../models/Movies';

type Fix = {
	data: MovieDetailsType | null;
	setData: React.Dispatch<React.SetStateAction<MovieDetailsType | null>>;
};

export const DataContext = createContext<Fix | null>(null);

const DataProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<MovieDetailsType | null>(null);

	return (
		<DataContext.Provider value={{ data, setData }}>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
