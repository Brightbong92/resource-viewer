import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './pages/home';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
