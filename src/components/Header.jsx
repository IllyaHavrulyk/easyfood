import React from "react";
import { Container, Row, Col } from "@kunukn/react-bootstrap-grid";
import "../styles/Header.scss";
import HeaderSecondary from "./HeaderSecondary";
import HeaderPrimary from "./HeaderPrimary";

function Header() {
      return (
            <Container className="header">
                  <HeaderSecondary />
                  <HeaderPrimary />
            </Container>
      )
}

export default Header;