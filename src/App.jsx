import React from 'react';
import Dashboard from './components/Dashboard';
import { Appbar } from './components/AppBar';

const App = () => {
  return (
    <div>
      <Appbar />
      <Dashboard />
    </div>
  );
};

export default App;
