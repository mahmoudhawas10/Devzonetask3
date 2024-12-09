import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Home extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          {this.props.product.map((data, i) => (
            <div
              key={data.id}
              className="col-12 bg-success text-white d-flex flex-wrap align-items-center justify-content-between p-3 mb-2 rounded shadow-sm"
            >
              <h3 className="m-0"> {i} </h3>
              <h3 className="m-0">name: {data.name}</h3>
              <h3 className="m-0">price: {data.price}</h3>
              <h3 className="m-0">Quantity: {data.quantity}</h3>
              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => this.props.Increment(data)}
                >
                  Increment
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => this.props.Decrement(data)}
                >
                  Decrement
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => this.props.Delete(data)}
                >
                  Delete
                </Button>
              </div>
              <h3 className="m-0 fs-6">
                Total Price is: {data.price * data.quantity}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
