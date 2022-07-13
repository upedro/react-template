import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GamesContextProvider } from './contexts/GamesContext';
import GlobalLayout from './layout/GlobalLayout/GlobalLayout';
import Router from './routes/App.routes';

function App() {
  return (
    <BrowserRouter>
      <GamesContextProvider>
        <GlobalLayout>
          <Router />
        </GlobalLayout>
      </GamesContextProvider>
    </BrowserRouter>
  );
}

export default App;
