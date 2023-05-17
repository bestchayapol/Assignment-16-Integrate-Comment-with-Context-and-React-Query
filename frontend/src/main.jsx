import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CommentProvider } from './share/modal/comment/CommentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  </React.StrictMode>
);
