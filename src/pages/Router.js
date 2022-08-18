import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterCounter from './CharacterCounter/CharacterCounter';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
