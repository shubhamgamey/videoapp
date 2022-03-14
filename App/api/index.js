const BASE_URL = 'https://api.rawg.io/api';
// Replace the Xs below with your own API key
const API_KEY = '8b1f8634e68340b08182b0acea8d9b6c';

export const videosApi = {
  // later convert this url to infinite scrolling
  fetchAllVideos: ({pageParam = 1}) =>
    fetch(`${BASE_URL}/games?key=${API_KEY}&page=${pageParam}`).then(res => {
      console.log('fetched', res.json());
      return res.json();
    }),
};
