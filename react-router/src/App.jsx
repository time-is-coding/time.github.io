import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import About from './paeg/about'
import Inbox from './paeg/inbox'

function App() {
    return (
        <Switch>
            <Route path="/foo" element={<About />} />
            <Route path="/bar" element={<Inbox />} />
        </Switch>
    );
}

export default App;
