import React from "react"
import { Row, Col } from "@kunukn/react-bootstrap-grid";

export default function MainDescription() {
      return (
            <Row>
                  <Col className="main-description" md={{ span: 5, offset: -7 }}>
                        <h1 className="main-description_title">
                              Твои вкусняшки с доставкой на дом
                        </h1>
                        <h3 className="main-description_text">
                              Онлайн-магазин по доставке вкусняшек-удобное решение.когда лень выйти из дома.
                        </h3>
                  </Col>
            </Row>
      )
}
