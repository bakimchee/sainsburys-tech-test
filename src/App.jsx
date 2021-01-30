import React, { useState, useEffect } from 'react';

import { CheckoutContextProvider } from './Context/Checkout';
import { ModeContext, ModeContextProvider } from './Context/Mode';
import { SidebarContextProvider } from './Context/Sidebar';

import ProductCard from './Components/ProductCard';
import Container from './Components/Container';
import Header from './Components/Header';
import GridLayout from './Components/GridLayout';
import SkipLink from './Components/SkipLink';

import Footer from './Components/Footer';

import GlobalStyles from './Styles/GlobalStyles';

import { hot } from 'react-hot-loader/root';

const fetchURL = 'https://jsainsburyplc.github.io/front-end-test/products.json';

function App() {
  const [data, setData] = useState(null);
  const getData = () => fetch(fetchURL).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <>
      <ModeContextProvider>
        <CheckoutContextProvider>
          <SidebarContextProvider>
            <GlobalStyles />
            <SkipLink />
            <Container>
              <Header></Header>

              <GridLayout id="main">
                {data?.map((item) => (
                  <ProductCard equalHeight={true} product={item} key={item.sku} />
                ))}
              </GridLayout>
            </Container>
            <Footer />
          </SidebarContextProvider>
        </CheckoutContextProvider>
      </ModeContextProvider>
    </>
  );
}

export default hot(App);
