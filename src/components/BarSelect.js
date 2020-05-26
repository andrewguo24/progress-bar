import React from "react";
import "./BarSelect.css";

class BarSelect extends React.Component {
  render() {
    const { data, barSelectHandler, value } = this.props;
    return (
      <select
        id="bar"
        onChange={(e) => barSelectHandler(e)}
        className="Bar-Select"
        value={value}
      >
        {data &&
          data.bars &&
          data.bars.map((progress, index) => (
            <option key={index} value={index}>
              Progress Bar {index + 1}
            </option>
          ))}
      </select>
    );
  }
}

export default BarSelect;
