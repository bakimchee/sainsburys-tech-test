import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import { CheckoutContextProvider } from './Context/Checkout';
import { ModeContextProvider } from './Context/Mode';
import { SidebarContextProvider } from './Context/Sidebar';

import ProductCard from './Components/ProductCard';
import Container from './Components/Container';
import Header from './Components/Header';
import GridLayout from './Components/GridLayout';
import SkipLink from './Components/SkipLink';
import Checkout from './Components/Checkout';

import GlobalStyles from './Styles/GlobalStyles';

import getData from './Utils/GetData';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setLoading(false);
        setError('Failed to retrieve data');
      });
  }, []);

  return (
    <>
      <ModeContextProvider>
        <CheckoutContextProvider>
          <SidebarContextProvider>
            <GlobalStyles />
            <SkipLink />
            <Container>
              <Header />
              <GridLayout id="main">
                {error && <div>{error}</div>}
                {loading && !error && <div>loading...</div>}
                {data &&
                  !error &&
                  data.map((item) => <ProductCard equalHeight product={item} key={item.sku} />)}
              </GridLayout>
            </Container>
            <Checkout />
          </SidebarContextProvider>
        </CheckoutContextProvider>
      </ModeContextProvider>
    </>
  );
}

export default hot(App);
