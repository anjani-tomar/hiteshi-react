import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Scrolly from './components/Scrolly';
import Hooks from './components/Hooks';
import SliderImg from './components/SliderImg';
import Lifecycle from './components/Lifecycle';
function App() {
  const title = "Our process of building a successful ";
  const view = "view our services";

  return (
    <BrowserRouter>
      <div className="text-white ">
       
        <Routes>
          <Route path='/' element={
            <>
             <Lifecycle />
              <Scrolly title={title} view={view} />
              <Hooks />
            </>
          } />
          <Route path='/view' element={
            <>
              <Scrolly title={title} view={view} />
              <SliderImg />
            </>
          } />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
