import React from "react";
import "./Bar.css";

class Bar extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="bar-container">
        {data &&
          data.bars &&
          data.bars.map((bar, index) => (
            <div className="bar" key={index}>
              <div
                className="progress"
                style={{
                  width: bar > 0 ? (bar > 100 ? "100%" : `${bar}%`) : 0,
                  background: bar >= data.limit && "red",
                }}
              />
              <div className="progress-number">{bar <= 0 ? 0 : bar}%</div>
            </div>
          ))}
      </div>
    );
  }
}

export default Bar;
