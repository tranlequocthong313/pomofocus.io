import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: { colorPrimary: 'var(--primary-bg-color)' },
        components: {
          Menu: {
            activeBarHeight: 0,
            itemColor: 'white',
            itemHeight: '32px',
            itemHoverColor: 'white',
          },
          Tabs: {
            inkBarColor: 'transparent',
            cardHeight: 28,
            itemColor: 'white',
            itemActiveColor: 'white',
            itemSelectedColor: 'white',
            itemHoverColor: 'white',
            colorBgContainer: 'rgba(0,0,0,0.15)',
            borderRadius: 4,
            lineType: 'none',
          },
          Switch: {
            handleSize: 28,
          },
        },
      }}
    >
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
