import { Fragment, React } from "react";
import Header from "./components/Header";
import { Container, Row, Col } from "@kunukn/react-bootstrap-grid";


function App() {
  return (
    <Fragment>
      <Header />
      <Container className="main">
        <Row>
          <Col className="main-description" md={{ span:5, offset: -7}}>
            <h1 className="main-description_title">
            Твои вкусняшки с доставкой на дом
            </h1>
            <h3 className="main-description_text">
            Онлайн-магазин по доставке вкусняшек-удобное решение.когда лень выйти из дома.
            </h3>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
