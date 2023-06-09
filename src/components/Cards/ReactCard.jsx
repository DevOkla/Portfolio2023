import React from "react";

import {
  Cards,
  Card,
  CardBox,
  CardFront,
  CardBack,
  Bars,
  Red,
  Green,
} from "../../components/Card.Style.js";
import { SiReact } from "react-icons/si";

const ReactCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiReact />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Red />
            </Bars>
            <h2>React</h2>
            &nbsp;
            <h4>React core concepts</h4>
            <h4>States & Props</h4>
            <h4>Hooks & Dependencies</h4>
            <h4>Modules & Routing </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default ReactCard;
