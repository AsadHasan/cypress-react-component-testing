import { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Empty", imageUrl: "" };
  }
  pictureOfTheDay = () => {
    if (this.state.title === "Empty" && !this.state.imageUrl) {
      fetch(
        `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => this.setState({ title: res.title, imageUrl: res.hdurl }))
        .catch((err) => console.log(err));
    }
  };
  render() {
    this.pictureOfTheDay();
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
