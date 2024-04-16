import React from 'react'
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import { Provider } from 'react-redux';


import Routing from './Routes';

function App() {
  return (
    <Provider store={store}> 

<div className='App'>
    
    <Routing />
      </div>
    </Provider>
  
  );
}

export default App;
