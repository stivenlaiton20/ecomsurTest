import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/layout/Layout'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import './index.scss';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
