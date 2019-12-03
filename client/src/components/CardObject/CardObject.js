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
      <div className="cardObjectCon">
            <Card style={{ width: '14rem' }}>
              <CardText>
                <div className="cardCon">
                  <div className="title">{data.name}</div>
                  <img className="image" src={require("../../assets/" + data.file)} width="100"></img>
                  <div className="des">{itemdescription[itemdescription.findIndex(x => x.name === name)].description}</div>
                </div>
              </CardText>
            </Card>

      </div>
    )
  }
}
