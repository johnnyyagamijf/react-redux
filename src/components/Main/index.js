import React from 'react';

import {Provider} from 'react-redux';
import {store} from '../../store/index';
import SideBar from '../SideBar';
import Usuarios from '../Usuarios';
import Header from '../Header';

import './styles.css';

export default () =>{
  return(
    <Provider store={store}>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Usuarios></Usuarios>
        </div>
        <div className="aside">
          <SideBar></SideBar>
        </div>
        <footer></footer>    
    </div>
    </Provider>
    
   
  )
}