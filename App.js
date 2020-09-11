import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {LoginComponent} from './components/Login';

const App = ()=>{
    const companyName='Pega Systems';
   return <div>
       <Header title={companyName} />
       <LoginComponent />
       <Footer />
       </div>;
};

export default App;

//This is pure component or stateless component