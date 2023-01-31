import React, {} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import action from './todo/task1/action'
import {vadiveluComedyAction, goundamaniComedyAction, subscribeAction, unSubscribeAction} from './index'
// import Forms from './todo/task1/Forms';
// import Forms from './components/Forms';
import Todos from './components/Todos';

const App = () => {
  // const comedies = useSelector(state => state);
  // const dispatch = useDispatch();
  
  return (
    <>
    {/* <p>{comedies.isSubscribed ? 'true' : 'false'}</p>
    <img src={comedies.img}/>
    <button disabled = {!comedies.isSubscribed} onClick={() => dispatch(vadiveluComedyAction())}>Vadivelu</button> &nbsp;
    <button disabled = {!comedies.isSubscribed} onClick={() => dispatch(goundamaniComedyAction())}>Goundamani</button> &nbsp;
    <button onClick={() => dispatch(subscribeAction())}>{!comedies.isSubscribed ? "Subscribe" : "UnSubcribe"}</button> &nbsp; */}
    {/* <button onClick={() => dispatch(unSubscribeAction())}>UnSubscribe</button> */}
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/todoss" element={<Todos/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  ) 
}

export default App;
