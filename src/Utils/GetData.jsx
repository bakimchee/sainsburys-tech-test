const fetchURL = 'https://jsainsburyplc.github.io/front-end-test/products.json';

const getData = () => fetch(fetchURL).then((data) => data.json());

export default getData;
