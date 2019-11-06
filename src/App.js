import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';

function App() {

  useEffect(() => {
		console.log('NasaList component mounted');
		
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=EQscKau3FR1jR3ws84unIpvf7x5PgLrXju8nlA4i')
			.then(response => {
				console.log('Nasa: ', response.data);
				// Setting our movies data to state
				
			})
			.catch(error => {
				console.log('the data was not returned', error);
			});
	}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
