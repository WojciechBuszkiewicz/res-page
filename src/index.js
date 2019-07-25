import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { PageProvider } from './components/context'


ReactDOM.render(
    <PageProvider>
        <Router>
            <App />
        </Router>
    </PageProvider>
    , document.getElementById('root'));

