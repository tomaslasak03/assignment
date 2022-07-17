import React from 'react';
import ThemeProvider from '@config/theme/Provider';
import { HomeS } from './style';

// Layouts
import { Header, Title, Table } from '@layouts';

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <HomeS>
        <Header />
        <Title />
        <Table />
      </HomeS>
    </ThemeProvider>
  );
};

export default Home;
