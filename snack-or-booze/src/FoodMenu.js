import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function FoodMenu({ snacks, drinks, onItemRemoved }) {
  const handleDeleteClick = (itemId, menuType) => {
    // Call the onItemRemoved function with the itemId to delete the item
    onItemRemoved(itemId, menuType);
  };
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          {snacks && (
            <CardTitle className="font-weight-bold text-center">
              Food Menu
            </CardTitle>
          )}
          {drinks && (
            <CardTitle className="font-weight-bold text-center">
              Drinks Menu
            </CardTitle>
          )}

          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          {snacks && snacks.length > 0 && (
            <ListGroup>
              {snacks.map((snack) => (
                <div key={snack.id}>
                  <Link to={`/snacks/${snack.id}`} key={snack.id}>
                    <ListGroupItem>{snack.name}</ListGroupItem>
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(snack.id, snack.menuType)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ListGroup>
          )}
          {drinks && drinks.length > 0 && (
            <ListGroup>
              {drinks.map((drink) => (
                <div key={drink.id}>
                  <Link to={`/drinks/${drink.id}`} key={drink.id}>
                    <ListGroupItem>{drink.name}</ListGroupItem>
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(drink.id, drink.menuType)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ListGroup>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
