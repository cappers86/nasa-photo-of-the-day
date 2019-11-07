import React, { useEffect  } from "react";
import ReactStrap from './components/ReactStrap';
import "./App.css";

import NasaList from "./components/NasaList";



function App() {
  
  useEffect(() => {
		// When the component mounts (after rendering to the DOM)
		// Side effects live here
		console.log('App component mounted.');

		return () => {
			// When the component unmounts (after component is removed from the DOM)
			// The final side effect we want to run
			console.log('App component unmounting...');
		}
	}, 
	[
		// Variables that we want to watch for changes
	]);
  
  return (
    <div className="App">
     <ReactStrap />
     <NasaList />
      
      
     
    </div>
  );
}

export default App;
