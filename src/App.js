import React from 'react';
import { Layout } from 'antd';
import Routes from '@/routers'
import './App.css';
const { Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App;
