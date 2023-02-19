import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// redux
import store from './Redux/Store'
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
