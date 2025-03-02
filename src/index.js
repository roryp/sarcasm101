import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SentimentHeatmap from './components/SentimentHeatmap';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SentimentHeatmap />
  </React.StrictMode>
);