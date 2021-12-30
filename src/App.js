import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    const { title = "Empty", imageUrl = "" } = this.props;
    this.state = { title: title, imageUrl: imageUrl };
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
        <h1 data-cy="Title">{this.state.title}</h1>
        <img src={this.state.imageUrl} alt="" data-cy="Image" />
      </div>
    );
  }
}
export default App;
