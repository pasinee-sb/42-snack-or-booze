import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let foodItem = items.find((item) => item.id === id);

  if (!foodItem) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {foodItem.name}
          </CardTitle>
          <CardText className="font-italic">{foodItem.description}</CardText>
          <p>
            <b>Recipe:</b> {foodItem.recipe}
          </p>
          <p>
            <b>Serve:</b> {foodItem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
