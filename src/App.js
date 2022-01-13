import { Component } from "react";
require("dotenv-defaults").config();

class App extends Component {
  constructor(props) {
    super(props);
    const {
      title = "Empty",
      imageUrl = "",
      buttonText = "Show description",
      description = "",
    } = this.props;
    this.state = {
      title: title,
      imageUrl: imageUrl,
      buttonText: buttonText,
      description: description,
    };
    this.pictureOfTheDay = this.pictureOfTheDay.bind(this);
    this.description = this.description.bind(this);
  }
  pictureOfTheDay = () => {
    let newState = this.state;
    fetch(
      `${process.env.REACT_APP_URL}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        newState.title = res.title;
        newState.imageUrl = res.hdurl;
        newState.description = res.explanation;
        this.setState(newState);
      })
      .catch((err) => console.log(err));
  };
  description = () => {
    let newState = this.state;
    if (this.state.buttonText === "Show description") {
      newState.buttonText = "Hide description";
      this.setState(newState);
    } else {
      newState.buttonText = "Show description";
      this.setState(newState);
    }
  };
  componentDidMount() {
    this.pictureOfTheDay();
  }
  render() {
    return (
      <div>
        <h1 data-cy="Title">{this.state.title}</h1>
        <button data-cy="description-button" onClick={this.description}>
          {this.state.buttonText}
        </button>
        {this.state.buttonText === "Hide description" && (
          <p>{this.state.description}</p>
        )}
        <img src={this.state.imageUrl} alt="" data-cy="Image" />
      </div>
    );
  }
}
export default App;
