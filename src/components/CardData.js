import React from 'react';

const CardData = props => {
	return (
		<div className = "CardData" key = {props.data}>
            
            <img className="img" src= {props.Img} alt="" />
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.version}</p>
            <p>{props.explanation}</p>
            <img className="App-logo" src= {props.url} alt="" />
        </div>
	);
};
export default CardData;