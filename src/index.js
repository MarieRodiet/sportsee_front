import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/_index.scss'
import App from './pages/App'
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HashRouter basename="/user">
            <Routes>
                <Route path="/:id" element={<App />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
