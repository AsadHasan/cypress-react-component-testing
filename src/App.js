import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Empty", imageUrl: "" };
    this.pictureOfTheDay = this.pictureOfTheDay.bind(this);
  }
  pictureOfTheDay = () => {
    fetch(
      `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ title: res.title, imageUrl: res.hdurl }))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.pictureOfTheDay();
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
}
export default App;
