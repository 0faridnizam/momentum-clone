import Axios from 'axios';

export default async function getList() {
  const API_KEY = process.env.REACT_APP_UNSPLASH;
  const API_URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=nature&orientation=landscape&count=1`;

  // const API_URL = urlFetch(
  //   `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=nature&orientation=landscape&count=1`,
  // );
  // const photo = Axios.get(API_URL).then(response => response.data);

  return Axios.get(API_URL).then(response => response.data);

  // end
}
