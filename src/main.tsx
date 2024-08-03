import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="98268c3729a54cab96fc7ffead9c3f2b"
      domain="https://gartest.kinde.com"
      redirectUri="http://localhost:3000"
      logoutUri="http://localhost:3000"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>,
)
