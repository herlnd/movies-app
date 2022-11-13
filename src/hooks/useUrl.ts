const useUrl = (fetchAction: string, fetchTerm?: string) => {
  const baseUrl = 'https://api.themoviedb.org/3/';
  const key = import.meta.env.VITE_API_KEY;
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
