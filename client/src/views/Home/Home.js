import React from 'react';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PackageColumn from "../../components/PackageColumn/PackageColumn"
import packageData from '../../data/packages';

function Home() {
    return (
      <div>
        <Container className='packagesContainer' fluid={true}>

          <Row>
            {packageData.map((item) =>
              <Col lg>
                <PackageColumn data={item} />
              </Col>
            )}
          </Row>

        </Container>
      </div>
    );
}

export default Home;
