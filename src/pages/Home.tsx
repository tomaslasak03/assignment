import React from 'react';
import ThemeProvider from '@config/theme/Provider';
import { HomeS } from './style';
import { Outlet, useParams } from 'react-router-dom';

// Layouts
import { Header, Title, Table } from '@layouts';

const Home: React.FC = () => {
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      document.body.style.overflowY = 'hidden';
      return;
    }

    document.body.style.overflowY = 'scroll';
  }, [params]);

  return (
    <ThemeProvider>
      <HomeS>
        <Header />
        <Title />
        <Table />
        <Outlet />
      </HomeS>
    </ThemeProvider>
  );
};

export default Home;
