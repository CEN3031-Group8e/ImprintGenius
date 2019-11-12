import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardObject.css';

export default class CardObject extends React.Component {

  render() {
    const { data } = this.props;
    const name = data.name;
    console.log(this.props)
    return (
      <div>
            <Card style={{ width: '14rem' }}>
            <div className='cardbody'>
            <CardText>
            <Row>
              <Col sm={6}>{data.name}
              <div className="image">
              <img src={require("../../assets/" + name + ".png")}
              width="100" align ="middle">
              </img>
              </div>
              </Col>
              <Col sm={6}>Details</Col>
            </Row>
            </CardText>
            </div>
            </Card>
      </div>
    )
  }
}
