import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardObject.css';
import itemdescription from '../../data/itemdescription';
import Container from 'react-bootstrap/Container';

export default class CardObject extends React.Component {

  render() {
    const { data } = this.props;
    const name = data.name;
    return (
      <div>
            <Card style={{ width: '14rem' }}>
            <CardText>
            <Container>
            <Row>
              <Col sm={6}>{data.name}
              <div className="image">
              <img src={require("../../assets/" + data.file)}
              width="100" align ="middle">
              </img>
              </div>
              </Col>
              <Col sm={6}>
              {itemdescription[itemdescription.findIndex(x => x.name === name)].description}
              </Col>
            </Row>
            </Container>
            </CardText>
            </Card>
      </div>
    )
  }
}
