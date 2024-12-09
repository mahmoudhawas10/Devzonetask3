import React, { Component } from "react";
import Headernav from "./Headernav";
import Home from "./Home";

class App extends Component {
  state = {
    product: [
      { id: 0, name: "pepsi", price: 10, quantity: 20 },
      { id: 1, name: "tiger", price: 20, quantity: 30 },
      { id: 2, name: "doritos", price: 30, quantity: 10 },
      { id: 3, name: "fanta", price: 40, quantity: 5 },
    ],
    darkMode: false, // إضافة darkMode إلى الحالة.
    message: "", // التأكد من أن message موجودة في state.
  };

  Increment = (data) => {
    const Incrementitem = this.state.product.map((products) => {
      if (products.id === data.id) {
        products.quantity++;
      }
      return products;
    });
    this.setState({
      product: Incrementitem,
    });
  };

  Decrement = (data) => {
    const Decrementitem = this.state.product.map((products) => {
      if (products.id === data.id) {
        products.quantity > 0
          ? products.quantity--
          : alert("please Enter New product");
      }
      return products;
    });
    this.setState({
      product: Decrementitem,
    });
  };

  Delete = (data) => {
    const Deleteitem = this.state.product.filter((products) => {
      return products.id !== data.id;
    });
    this.setState({
      product: Deleteitem,
    });
  };

  Reset = () => {
    const resetitem = this.state.product.map((products) => {
      products.quantity = 0;
      return products;
    });
    this.setState({
      product: resetitem,
    });
  };

  Deleteall = () => {
    this.setState({
      product: [],
      message: "تم حذف جميع المنتجات!",
    });
  };

  toggleMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    return (
      <div className={this.state.darkMode ? "dark-mode" : "light-mode"}>
        <Headernav
          Reset={this.Reset}
          Deleteall={this.Deleteall}
          message={this.state.message}
          toggleMode={this.toggleMode}
        />
        <Home
          product={this.state.product}
          Increment={this.Increment}
          Decrement={this.Decrement}
          Delete={this.Delete}
        />
      </div>
    );
  }
}

export default App;
