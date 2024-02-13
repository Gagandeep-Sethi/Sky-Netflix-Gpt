
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_tmdbid
    }
  };
  export const image_URL="https://image.tmdb.org/t/p/w500/"