let url = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = process.env.API_URL || 'http://localhost:8081/phones';
} else {
    url = process.env.API_URL || 'https://phonecatalogbackend.herokuapp.com/phones';
}

const fetchDataFromAPi = () => {
  return fetch(url).then((response) => response.json());
};

export default fetchDataFromAPi