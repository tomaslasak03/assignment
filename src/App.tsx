import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Detail } from '@pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/:id' element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
