import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";

class Topbutton extends Component {
  render() {
    const { darkMode } = this.props; 
    const appStyle = {
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    };
    return (
      <>
        <div className="w-100  d-flex gap-3 justify-content-center align-content-center">
          <div style={appStyle} className="pt-3">
            <button onClick={this.props.toggleMode} className="rounded">
              {darkMode ? <MdDarkMode /> : <MdOutlineModeNight />}
            </button>
          </div>
          <Button
            className="mt-3"
            variant="success"
            size="sm"
            onClick={this.props.Reset}
          >
            Reset Quantity
          </Button>
          <Button
            className="mt-3"
            variant="danger"
            size="sm"
            onClick={this.props.Deleteall}
          >
            Delete All
          </Button>
        </div>
        {<h1 className="w-100 text-center">{this.props.message}</h1>}
      </>
    );
  }
}

export default Topbutton;
