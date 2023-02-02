import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostProvider>
    <UserProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </UserProvider>
  </PostProvider>
);

