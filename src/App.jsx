import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MiApi from './Components/MiApi';

function App() {

  return (
    <>
    <Container>
    <Row >
    <Navbar expand="lg">
        <Navbar.Brand href="#home">Huachitos🐾</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Perros</Nav.Link>
            <Nav.Link href="#link">Gatos</Nav.Link>
            <NavDropdown title="informacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adopcion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hembras
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Machos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ubicacion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Row>
    </Container>
    <Container fluid>
    <Row className='bg-success'>
        <Col className='p-3 text-center text-warning d-flex align-items-center'>
          <h1>HUACHITOS</h1>
          <br/>
          <p>Encuentra y da Familia</p>
          </Col>
          <Col className='p-5 text-center text-warning d-flex align-items-center'>
            <h4>DESCRIPCIóN <br /> Tener a un perro o un gato a nuestro lado nos aporta multitud de beneficios.
            Empezando porque mejoran nuestra calidad de vida, nos ayudan a mantenernos en forma,
            reducen el estrés y nos hacen ser más responsables y respetuosos con los demás.
            <br />
            Para devolverles todo lo que nos dan aquí encontrarás contenidos útiles para cuidarlos. Por ejemplo,
            conocerás qué necesita tu animal de compañía, qué tienes que saber antes de tomar la decisión de tenerlo
            y la responsabilidad que esto conlleva o cuál es el mejor momento para adoptar, entre otros muchos artículos de interés.</h4>
          </Col>
      </Row>
    <hr/>
      <Row className='bg-success'>
        <Col className='m-2 p-5'>
        <Image src="https://img.freepik.com/vector-gratis/cute-dog-logo_1051-3349.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709251200&semt=ais/171x180" roundedCircle className='rounded float-end'/>
        </Col>
        <Col className='p-4 p-4'>
        <h4 className='p-2 text-warning'>1. Segunda oportunidad para un perro o gato</h4>
          <h4 className='p-2 text-warning'>2. Agradecimiento y vínculo afectivo con un perro adoptado</h4>
          <h4 className='p-2 text-warning'>3. Elegir mascota de adopción</h4>
          <h4 className='p-2 text-warning'>4. Contribuyes a ayudar a los perros en adopción</h4>
          <h4 className='p-2 text-warning'>5. Cuánto cuesta adoptar un gato</h4>
          <h4 className='p-2 text-warning'>6. Pasos para adoptar a tu Huachito</h4>
        </Col>
        <Col className='p-5 p-6'>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DonMl5FRfrVuwQf_AJ65qfJbQXsC1Es6tnthWnfEKUn9kKmMO-z7tRd018JTJKAdHuI&usqp=CAU/171x180" className='rounded float-end'/>
        </Col>
      </Row>

      <Row className='bg-warning'>
        <Col className='text-center p-2'>
          <MiApi />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App