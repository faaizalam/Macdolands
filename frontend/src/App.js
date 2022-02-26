import React from 'react';
import { Home } from './Screen/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import { Choose } from './Screen/Choose';
import Orderscreen from './Screen/Orderscreen';
import Review from './Screen/Review';
import Selectpayment from './Screen/Selectpayment';
import Payment from './Screen/Payment';
import { Compl } from './Screen/Compl';
import Admin from './Screen/Admin';
import { Que } from './Screen/Que';


// import { Choose } from './Screen/Choose';

function App() {
  return (
    <div className='root'>
     
    <BrowserRouter>
   <main> 
   <Route path='/' component={Home} exact={true}></Route>
   <Route path='/choose' component={Choose} ></Route>
   <Route path='/order' component={Orderscreen}></Route>
   <Route path='/review' component={Review}></Route>
   <Route path='/selectpayment/:id?' component={Selectpayment}></Route>
   <Route path='/payment' component={Payment}></Route>
   <Route path='/complete' component={Compl}></Route>
   <Route path='/admins' component={Admin}></Route>
   <Route path='/information' component={Que}></Route>
  
   </main>
      

    
    </BrowserRouter>
  
    </div>
  );
}

export default App;
