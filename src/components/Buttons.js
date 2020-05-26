import React from "react";
import "./Buttons.css";

class Buttons extends React.Component {
  render() {
    const { data, buttonClickHandler } = this.props;
    return (
      <div className="buttons-wrapper">
        {data &&
          data.buttons &&
          data.buttons.map((btn, index) => (
            <button
              className="button"
              key={index + "_" + btn}
              onClick={() => buttonClickHandler(btn)}
            >
              {btn}
            </button>
          ))}
      </div>
    );
  }
}

export default Buttons;
