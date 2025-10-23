import React from 'react';
import './pages/Home.css'

const TestTailwind = () => {
  return (
    <div style={{padding:16}}>
      <div className="card">
        <h2>UI Test Card</h2>
        <p className="muted">This page uses the new design tokens and card styles.</p>
      </div>
    </div>
  );
};

export default TestTailwind;