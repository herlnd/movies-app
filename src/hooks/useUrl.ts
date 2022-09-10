const useUrl = (fetchAction: string, fetchTerm?: string) => {
	const baseUrl = 'https://api.themoviedb.org/3/';
	const key = '5fc0c948b880fd0a44a19c43f9b6d881';
	let action;
	let param;
	let term;
	let movie;

	if (fetchAction === 'search') {
		action = 'search/';
		param = '&query=';
		term = fetchTerm;
		movie = 'movie';
	}

	if (fetchAction === 'discover') {
		action = 'discover/';
		param = '&sort_by=';
		term = 'popularity.desc';
		movie = 'movie';
	}

	if (fetchAction === 'getMovie') {
		action = 'movie/';
		param = '';
		term = '';
		movie = fetchTerm;
	}

	return `${baseUrl}${action}${movie}?api_key=${key}&include_adult=false${param}${term}`;
};

export default useUrl;
