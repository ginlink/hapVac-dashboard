import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import '@/assets/css/reset.css'

import App from './pages/App'
import store from '@/state'

import ThemeProvider, { ThemedGlobalStyle } from '@/theme'

// polyfill
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import AppLayout from './pages/AppLayout'
import { HashRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <LanguageProvider>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
