import React from 'react';

const CardData = props => {
	return (
		<div className = "CardData" key = {props.data}>
            
            <img className="img" src= {props.Img} alt=""></img> 
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.version}</p>
            <p>{props.explanation}</p>
            <button className="Box-dec"><a className="App-link" href= {props.url}>See a larger version</a></button>
            <img className="App-logo" src= {props.url} alt=""></img> 
           
        </div>
	);
};
export default CardData;