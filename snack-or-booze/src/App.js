import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import addItemForm from "./addItemForm";
// import Snack from "./FoodItem";
// import Drink from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const handleItemAdded = async (newItem) => {
    if (newItem.menuType === "food") {
      setSnacks((snacks) => [...snacks, { ...newItem }]);
    } else {
      setDrinks((drinks) => [...drinks, { ...newItem }]);
    }
  };
  const handleRemovedItem = async (itemToRemove, menuType) => {
    try {
      if (menuType === "food") {
        const newSnacksArr = snacks.filter(
          (snack) => snack.id !== itemToRemove
        );
        setSnacks(newSnacksArr);
        await SnackOrBoozeApi.removeSnacks(itemToRemove);
      } else {
        const newDrinksArr = drinks.filter(
          (drink) => drink.id !== itemToRemove
        );
        setDrinks(newDrinksArr);
        await SnackOrBoozeApi.removeDrinks(itemToRemove);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home onItemAdded={handleItemAdded} />
            </Route>
            <Route exact path="/snacks">
              <Menu
                snacks={snacks}
                title="Snacks"
                onItemRemoved={handleRemovedItem}
              />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu
                drinks={drinks}
                title="Drinks"
                onItemRemoved={handleRemovedItem}
              />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
