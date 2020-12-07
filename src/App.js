import './App.css';
import React from 'react';
import Main from "./components/Main";
import Header from "./components/Header";
import Content from './components/Content';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
    return (
       <div id={'App'}>
           <Main header={(<Header/>)}
                   content={(<Content/>)}
                   footer={(<Footer/>)}
                   nav={(<Nav/>)}

           />
       </div>
    );
}

export default App;
