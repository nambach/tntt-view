import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import './App.css';
import Search from './pages/Search';
import {store} from './providers';


function App() {
  return (
  <ReduxProvider store={store}>
    <Search/>
  </ReduxProvider>
  );
}

export default App;
