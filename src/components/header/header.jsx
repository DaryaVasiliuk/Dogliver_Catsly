import {Col, Container, Image, Row} from 'react-bootstrap';
import {MDBCol} from "mdb-react-ui-kit";
import {BiCartAlt} from 'react-icons/bi';


export const Header = () => {

  return (
    <Container style={{ backgroundColor: '#DBC4C4', height: 100}}>
        <Row>
          <Col md='3' className='p-0' >
            {''}
            <Image src='https://www.kadrof.ru/sites/default/files/illustrations/cat_dogs_0_0.jpg'
            height='100'/>
          </Col>
          <Col md='5' style={{ color: '#963131', textAlign: "center", marginTop: 31, fontSize: 25}}>
            Dogliver Catsly
          </Col>
          <Col md='4' >
            <Row>
              <MDBCol md="3" style={{ color: '#963131', marginTop: 15}}>
                <input className="form-control"  type="text" placeholder="Search" aria-label="Search" />
              </MDBCol>
            </Row>
            <Row style={{ marginTop: 15, marginLeft: 170}}>
              <BiCartAlt/>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}