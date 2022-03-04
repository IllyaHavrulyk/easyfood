import React from "react";
import { Row, Col } from "@kunukn/react-bootstrap-grid";
import locationIcon from "../images/location.svg";
import userIcon from "../images/user.svg";
import "../styles/Header.scss";

export default function HeaderSecondary() {
      return (
            <Row className="header-secondary">
                  <Col md={{ span: 6 }} className="header-left">
                        <img src={locationIcon} alt="Location icon" className="header-left_icon" />

                        <p>Киев <i className="arrow-down" /></p>
                        <p className="header-left_text">Адрес доставки <i className="arrow-down" /></p>
                        <p>Среднее время доставки 15 мин.</p>
                  </Col>
                  <Col md={{ span: 1, offset: 5 }} className="header-left">
                        <img src={userIcon} alt="Location icon" className="header-left_icon" />
                        <p>Войти</p>
                  </Col>
            </Row>
      )
}