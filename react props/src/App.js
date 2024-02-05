import { Container,Row, Col } from 'react-bootstrap';
import './App.css';
import PlayersList from './component/PlayersList';

const App = () => {
  return (
    <Container style={{marginTop:"50px"}}>
      <Row>
        <Col lg={4} style={{marginTop:"50px"}}>
           {/* the players card  */}
        <PlayersList/>
        </Col>
        <Col lg={4} style={{marginTop:"50px"}}>
          {/* the players card  */}
        <PlayersList/>
        </Col>
        <Col lg={4} style={{marginTop:"50px"}}>
          {/* the players card  */}
        <PlayersList/>
        </Col>
      </Row>
    </Container>
     
  );
}

export default App;
