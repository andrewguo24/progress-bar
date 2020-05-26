import React from "react";
import Bars from "./components/Bar";
import BarSelect from "./components/BarSelect";
import Buttons from "./components/Buttons";
import "./App.css";

export default class App extends React.Component {
  state = {
    data: [],
    selectedBar: 0,
    buttonValue: 0,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const fetchData = async () => {
      try {
        const response = await fetch("https://pb-api.herokuapp.com/bars");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        this.setState({
          data,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false });
      }
    };
    fetchData();
  }

  barSelectHandler = (e) => {
    this.setState({ selectedBar: e.target.value });
  };

  buttonClickHandler = (btn) => {
    const { data, selectedBar } = this.state;
    const newValue = Number(data.bars && data.bars[selectedBar]) + Number(btn);
    data &&
      data.bars &&
      data.bars.splice(selectedBar, 1, newValue > 0 ? newValue : 0);
    this.setState({ data });
  };

  render() {
    const { data, isLoading, selectedBar, isProgressChanged } = this.state;
    console.log("data", data);
    console.log("isProgressChanged", isProgressChanged);
    return (
      <div className="App">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div>
            <h1 className="App-header">Progress Bar</h1>
            <h4 className="limit">Limit: {data && data.limit}</h4>
            <Bars data={data} isProgressChanged={isProgressChanged} />
            <div className="select-buttons-wrapper">
              <BarSelect
                value={selectedBar}
                data={data}
                barSelectHandler={this.barSelectHandler}
              />
              <Buttons
                data={data}
                buttonClickHandler={this.buttonClickHandler}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
