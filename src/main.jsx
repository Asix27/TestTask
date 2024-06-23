import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./routing/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>
);