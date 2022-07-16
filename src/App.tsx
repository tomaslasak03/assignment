import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Detail } from '@pages';

// Global Styles
import { globalStyle } from '@config/theme';

const App: React.FC = () => {
  globalStyle();

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/:id' element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
