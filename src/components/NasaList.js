import React, { useEffect, useState } from 'react';

import axios from 'axios';

import CardData from './CardData';

function NasaList() {
	const [nasaData, setNasaData] = useState([]);

	useEffect(() => {
		console.log('List component mounted');
		
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=EQscKau3FR1jR3ws84unIpvf7x5PgLrXju8nlA4i')
			.then(response => {
				console.log('Incoming data',response.data);
				// Setting our movies data to state
				setNasaData(response.data);
			})
			.catch(error => {
				console.log('the data was not returned', error);
			});
	}, []);
	// ☝️ The empty dependency array prevents infinite loops
		// It fires the effect hook on the first component mount	

	
	return (
		<div className="card">

{<CardData key = {nasaData.data} 
		   title = {nasaData.title} 
		   date = {nasaData.date}
		   explanation ={nasaData.explanation} 
		   Img = {nasaData.url}
		   version = {nasaData.service_version}	
		   media = {nasaData.media_type}
		   url = {nasaData.hdurl}
		  
		   	/> 	}

		</div>
			
	);
}

export default NasaList;

