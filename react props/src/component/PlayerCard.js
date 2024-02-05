import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

//  passing the prop children to the react-bootstrap card 
const PlayerCard = (props) => {
  return (
    <Container style={{marginBottom:"50px"}}>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.playerurl} />
            <Card.Body>
              <Card.Title>{props.playerName}</Card.Title>
              <Card.Text>{props.playerCurrentTeams}</Card.Text>
              <Card.Text>{props.playerNationality}</Card.Text>
              <Card.Text>{props.playerjerseyNumber}</Card.Text>
              <Card.Text>{props.playerage}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerCard;
