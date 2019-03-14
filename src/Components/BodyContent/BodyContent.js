import React, { Component } from "react";
import ColorSquare from "../ColorSquare";
import "./BodyContent.scss";

class BodyContent extends Component {
  render() {
    return (
      <div
        className={
          (this.props.splitView & !this.props.splitScreenDisabled) ? "body-content split" : "body-content"
        }
      >
        <div className="input-container">
          <div className="color-input">
            <label htmlFor={"color-input-" + this.props.number}>Color code input {this.props.number}</label>
            <input
              id={"color-input-" + this.props.number}
              name={"inputValue" + this.props.number}
              type="search"
              placeholder="Color Code (Hex, RGB, or Name)"
              onChange={this.props.handleInputChange}
              data-number={this.props.number}
              value={this.props.inputValue}
              style={{ borderColor: this.props.colorData.contrast }}
            />
            <button
              onClick={() => this.props.handleSubmit(this.props.number)}
              name={"inputValue" + this.props.number}
              data-number={this.props.number}
              style={{
                borderColor: this.props.colorData.contrast,
                backgroundColor: this.props.colorData.contrast,
                color: this.props.colorData.oppositeContrast
              }}
            >
              GO
            </button>
          </div>
          <div
            className="color-name"
            style={{ color: this.props.colorData.contrast }}
          >
            {this.props.colorData.name}
          </div>
        </div>
        <div className="container">
          {this.props.colorData.shades.map((color, index) => {
            return (
              <ColorSquare
                handleColorClick={this.props.handleColorClick}
                colorDataNumber={this.props.number}
                color={color}
                key={color + index}
                squareNumber={index + 1}
                addMenuItem={this.props.addMenuItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BodyContent;
