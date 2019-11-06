import React, { useEffect  } from "react";
import "./App.css";
import NasaList from "./components/NasaList";
import CardData from "./components/CardData";


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
       
       <NasaList />
      
      
    </div>
  );
}

export default App;
