import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import AddItemForm from "./addItemForm";

function Home({ onItemAdded }) {
  return (
    <section className="col-md-8">
      <AddItemForm onItemAdded={onItemAdded} />
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
