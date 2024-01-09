import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
function App() {
 return(
 <BrowserRouter>
 <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<ErrorPage/>}/>

 </Routes>
 </BrowserRouter>
 );
}

export default App;
