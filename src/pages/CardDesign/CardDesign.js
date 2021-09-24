import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "antd";
import c2 from "./Templates/c2.png";
import c1 from "./Templates/c1.jpg"
function CardDesign() {
  const history = useHistory();
  const inputData = (temp) => {
    history.push(`/InputData/${temp}`);
  };
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "20rem",
          backgroundColor: "gainsboro",
          border: "solid 4px #875c9f",
          borderRadius: "7px 7px 70px 70px",
        }}
        cover={<img alt="example" src={c1} />}
      >
        <Button onClick={() => inputData(1)}>Customize</Button>
      </Card>
      <Card
        style={{
          width: "18rem",
          height: "20rem",
          backgroundColor: "gainsboro",
          border: "solid 4px #875c9f",
          borderRadius: "7px 7px 70px 70px",
        }}
        cover={<img alt="example" src={c2} />}
      >
        <Button onClick={() => inputData(1)}>Customize</Button>
      </Card>
    </div>
  );
}

export default CardDesign;
