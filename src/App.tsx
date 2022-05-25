import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClassComponent1 from './components/class_component/MyClassComponent1';
import MyFunctionalComponent1 from './components/functional_component/MyFunctionalComponent1';

function App() {
  return (
    <>
      <MyClassComponent1 />
      <MyFunctionalComponent1 />
    </>
  );
}

export default App;
