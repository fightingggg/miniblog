import React from 'react';
import './App.css';
import Board from './component/Board';
import View from './component/View';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Board />} />
          <Route path="/view/:postId" element={<View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
