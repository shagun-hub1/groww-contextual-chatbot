import App from "./App";
import './index.css'
import store from './store'
import AlertTemplate from 'react-alert-template-basic'
import {positions,transitions,Provider as AlertProvider} from 'react-alert'
import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
 

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE,
  };
  
const container = document.getElementById('root');
const root = createRoot(container); 

root.render( 
<Provider store={store}>
    <AlertProvider template={AlertTemplate}{...options}>
         <BrowserRouter>
           <App/>,
         </BrowserRouter>
        
    </AlertProvider>
</Provider>,

);
 
