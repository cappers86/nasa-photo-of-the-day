import React from 'react';
import styled from 'styled-components';

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';




const Button = styled.button`
color: silver;
background: black;

::before {
  content: '🚀';
}

:hover {
  color: red;
}

&:hover {
    transform: scale(1.1);
}

  
`;

const H1 = styled.h1`
  font-size: 30px;
  font-family: sans-serif;
  align-content: center;
	color: silver;
	padding: 12px 0;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-family: sans-serif;
  align-content: center;
	color: silver;
	padding: 12px 0;
`;

const P = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  align-content: center;
	color: silver;
    padding: 12px 0;
    letter-spacing: 0.85em;
    background-color: black;

   

`;

const Div= styled.div`
background-color: black;
  
`;





const CardData = (props) => {
  return (
    <div className = "CardData" key = {props.data} >
      <Card>
        <CardImg width="100%" src={props.Img} alt="Card image cap" />
        <Div><CardBody>
        <CardTitle><H1>{props.title}</H1></CardTitle>
            <CardText><H2>{props.date}</H2></CardText>
            <CardSubtitle><H2>{props.version}</H2></CardSubtitle>
          <CardText><P>{props.explanation}</P></CardText>
          <CardLink href= {props.url}><Button>See more images</Button></CardLink>
          
        </CardBody></Div>
      </Card>
    </div>
  );
};



export default CardData;