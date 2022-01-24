import React, { Component } from "react";
import "./Layout.css";
import Svg from "../Components/Svg/Svg";
import Search from "../Components/Search/Search";
import { MdNavigateNext } from "react-icons/md";
import MenuFullView from "../Components/MenuFullView/MenuFullView";
import MenuCategory from "../Components/MenuCategory/MenuCategory";

import burger from "../assets/burger.jpg";
import hotdog from "../assets/hotdog.jpg";
import snack from "../assets/snack.jpg";
import taco from "../assets/taco.jpg";
import pizza from "../assets/pizza.jpg";
import pizzaa from "../assets/pizzaa.jpg";
// import italian from '../assets/italian.jpg'
// import sausage from '../assets/sausage.jpg'

import Icons from "../Components/Icons/Icons";
import OrderMenu from "../Components/OrderMenu/OrderMenu";
import Button from "../Components/Button/Button";

//Routing

class Layout extends Component {
  state = {
    foodCategories: [
      {
        id: 1,
        name: "Pizza",
        src: pizza,
      },
      {
        id: 2,
        name: "Burger",
        src: burger,
      },
      {
        id: 3,
        name: "Hotdog",
        src: hotdog,
      },
      {
        id: 4,
        name: "Taco",
        src: taco,
      },
      {
        id: 5,
        name: "Snack",
        src: snack,
      },
    ],

    foodTypes: {
      pizzaTypes: [
        {
          name: "Mushroom Pizza",
          price: 7.1,
        },
        {
          name: "Itarian Pizza",
          price: 5.7,
        },
        {
          name: "Sausage Pizza",
          price: 6.8,
        },
      ],
      burgerTypes: [
        {
          name: "Beef Burger",
          price: 72.3,
        },
        {
          name: "Turkey Burger",
          price: 23.1,
        },
        {
          name: "Veggie Burger",
          price: 12,
        },
      ],
      hotDogTypes: [
        {
          name: "Dodger Hotdog",
          price: 4,
        },
        {
          name: "Corn Hotdog",
          price: 3.2,
        },
        {
          name: "Chicago style Hotdog",
          price: 12.1,
        },
      ],
      tacoTypes: [
        {
          name: "Migas Taco",
          price: 4,
        },
        {
          name: "Fish Taco",
          price: 1.2,
        },
        {
          name: "Carnitas Taco",
          price: 3.2,
        },
      ],
      snackTypes: [
        {
          name: "Cookies",
          price: 9,
        },
        {
          name: "Fruits",
          price: 4,
        },
        {
          name: "Cake",
          price: 2,
        },
      ],
    },
  };

  render() {
    return (
      <div className="Container">
        <div className="div1">
          <Icons />
        </div>
        <div className="div2">
          <div className="alignItems">
            <h2>Today Menu :)</h2>
            <Search />
          </div>
          <Svg />

          <div className="alignItems">
            <h2>Menu Category</h2>
            <p className="iconBoxContainer">
              View All{" "}
              <span className="iconBox">
                <MdNavigateNext />
              </span>
            </p>
          </div>
          <div className="menuCategory">
            {this.state.foodCategories.map((item, index) => (
              <MenuCategory
                key={index}
                foodType={item.name}
                imgSrc={item.src}
                id={item.id}
              />
              // <BrowserRouter ></BrowserRouter>/
            ))}
          </div>
          <div className="menuFullView">
            {this.state.foodTypes.burgerTypes.map((foodtype, index) => (
              <MenuFullView
                key={index}
                price={foodtype.price}
                recipeName={foodtype.name}
                imgSrc={pizzaa}
              />
            ))}
          </div>
        </div>
        <div className="div3">
          <div className="div3flex">
            <h3>Order Menu</h3>
            <p className="iconBoxContainer">
              View All{" "}
              <span className="iconBox">
                <MdNavigateNext />
              </span>
            </p>
          </div>

          <div className="component-center">
            <OrderMenu />
            <OrderMenu />
            <OrderMenu />
          </div>
        </div>

        <div className="buttonPosition">
          <Button text="Checkout" />
        </div>
      </div>
    );
  }
}

export default Layout;
