const fetchURL = 'https://jsainsburyplc.github.io/front-end-test/products.json';

async function getData() {
  try {
    const result = await fetch(fetchURL);
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
}

export default getData;
