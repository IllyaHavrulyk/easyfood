import React from "react";
import { Row, Col } from "@kunukn/react-bootstrap-grid";
import "../styles/Header.scss";
import logoImage from "../images/logo.svg";
import shoppingCartImage from "../images/shopping_cart.svg";

export default function HeaderPrimary(){
      return(
            <Row className="header-primary">
                        <Col md={{ span: 3 }} >
                              <img src={logoImage} alt="Logo of easy food" />
                        </Col>
                        <Col md={{span: 7}} className="header-primary-items d-flex just-between">
                              <h1 className="header-primary__menu active">
                                    Главная
                              </h1>
                              <h1 className="header-primary__menu">
                                    О доставке 
                              </h1>
                              <h1 className="header-primary__menu">
                                    Сервисы
                              </h1>
                              <h1 className="header-primary__menu">
                                    Контакты
                              </h1>
                        </Col>
                        <Col md={{span: 2}} className="header-primary-shopping d-flex just-between">
                              <img src={shoppingCartImage} alt="Shopping cart" width="55" height="55" className="header-primary-shopping__logo"/>
                              <h1 className="header-primary__menu header-primary-shopping__total" style={{display: "inline-block"}}>21 950 р. <i className="arrow-down-big" /></h1>
                              
                        </Col>
                  </Row>
      )
}