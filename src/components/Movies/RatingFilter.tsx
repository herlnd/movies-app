import { useState } from 'react';
import { StarIcon } from '../Icons';

const RatingFilter = () => {
	const [rating, setRating] = useState(0);

	return (
		<div className='flex bg-slate-100 w-fit p-4 rounded-lg mb-8 items-center'>
			<h2 className='font-bold text-lg text-gray-800 pr-2'>Filter by rating</h2>
			{[...Array(5)].map((item, idx) => {
				const index = idx * 2 + 2;
				return (
					<button key={index} type='button' onClick={() => setRating(index)}>
						<StarIcon
							fill={
								index <= rating ? 'hsl(215, 28%, 17%)' : 'hsl(216, 12%, 84%)'
							}
						/>
					</button>
				);
			})}
		</div>
	);
};

export default RatingFilter;
