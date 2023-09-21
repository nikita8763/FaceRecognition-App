import React, { useCallback, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Clarifai from 'clarifai';
import {clarifiFunction} from "./clariftJs"

// import Clarifai from 'clarifai';



function App() {
  const [count, setCount] = useState(0)

  const onInputChange = event => {
    console.log(event.target.value);
    // setInput(event.target.value);
  };

//   const app = new Clarifai.App({
//   apiKey: 'b3552b802a7b4f4dbd112b956c9703c8'
// });

  const onButtonsubmit=() =>{
    console.log('click');
    // app.models.predict("6dc7e46bc9124c5c8824be4822abe105","https://samples.clarifai.com/metro-north.jpg" ).then(
    //   function(response){
    //     console.log(response);
    //   },
    //   function(err){

    //   }
    // );
    clarifiFunction()
  };

  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   await loadSlim(engine);
  // }, []);
  
  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);
  

  return (
    <>
      <div className='App'>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={onInputChange} onButtonsubmit={onButtonsubmit}/>
      
      </div>
    </>
  )
}

export default App
