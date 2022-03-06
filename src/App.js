import { Fragment, React } from "react";
import Header from "./components/Header";
import { Container, Row, Col } from "@kunukn/react-bootstrap-grid";
import MainDescription from "./components/MainDescription";
import CardsTitle from "./components/CardsTitle";
import CardsItems from "./components/CardsItems";

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Container className="main">
          <MainDescription />
          <CardsTitle />
          <CardsItems />
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </Fragment>
  );
}

export default App;
