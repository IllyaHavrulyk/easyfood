import React from "react";
import { Row } from "@kunukn/react-bootstrap-grid";
import sushiLogo from "../images/sushi.svg";
import vegetablesLogo from "../images/vegetables.svg";
import pizzaLogo from "../images/pizza.svg";


export default function CardsItems() {
      return (<Row md={{ span: 9, offset: -3 }} className="main-cards">
            <div className="main-cards-items">
                  <div className="card-item">
                        <img src={sushiLogo} alt="Sushi" />
                        <p>Сеты от 900 руб.-15 процентов</p>
                  </div>
                  <div className="card-item" style={{ marginLeft: "62px" }}>
                        <img src={vegetablesLogo} alt="Vegetables" />
                        <p>Доставка овощей от 2 кг БЕСПЛАТНО</p>
                  </div>
                  <div className="card-item" style={{ marginLeft: "62px" }}>
                        <img src={pizzaLogo} alt="Pizza" />
                        <p>Сегодня доставка пиц БЕСПЛАТНО</p>
                  </div>
            </div>
      </Row>)
}
