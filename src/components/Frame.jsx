import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import millify from "millify";
import './Frame.css';
const Frame = (props) => {
  let img = props.data.img;
  return (
    <>
          <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src = {img} className = "img-class" />
            <Card.Body >
              <Card.Title>{props.data.name} <p>({props.data.symbol})</p></Card.Title>
              
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Price : ${millify(props.data.price)}</ListGroupItem>
              <ListGroupItem>24hr Volume : {millify(props.data.volume)}</ListGroupItem>
              <ListGroupItem>Market Cap : {millify(props.data.marketcap)}</ListGroupItem>
              <ListGroupItem>24h low : ${millify(props.data.low)}</ListGroupItem><ListGroupItem>24h high : ${millify(props.data.high)}</ListGroupItem>
            </ListGroup>

          </Card>
      <br /> <br />
    </>
  );
};

export default Frame;
