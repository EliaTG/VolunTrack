import React from 'react'
import './App.scss';
import {  } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Pages import
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';

const App = () => {
  return (
    <>
      <section >
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="users">
                        <Route index element={<List/>}/>
                        <Route path=":userId" element={<Single/>}/>
                        <Route path="new" element={<New/>}/>
                    </Route>
                    <Route path="volunteer">
                        {/* <Route index element={<List/>}/>
                        <Route path=":userId" element={<Single/>}/>
                        <Route path="new" element={<New/>}/> */}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

      </section>
    </>
  )
}

export default App;