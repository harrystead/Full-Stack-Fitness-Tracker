import React from "react";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
  }

  getData = () => {
    console.log("Get authors is getting called");
    fetch("/api/authors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleBodyChange = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  submitFormHandler = (event) => {
    event.preventDefault();
    console.log(`${this.state.title} & ${this.state.body}`);

    const newPost = {
      title: this.state.title,
      body: this.state.body
    }

    axios.post('http://localhost:5000/post', newPost)
  };

  render() {
    return (
      <div>
        <form id="cms" onSubmit={this.submitFormHandler}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              placeholder="Post Title"
              onChange={this.handleTitleChange}
              value={this.state.title}
              type="text"
              className="form-control"
              id="title"
            />
            <br />
            <label htmlFor="body">Body:</label>
            <textarea
              placeholder="Post Body"
              onChange={this.handleBodyChange}
              value={this.state.body}
              className="form-control"
              rows="10"
              id="body"
            ></textarea>
            <div className="form-group"></div>
            <br />
            <button type="submit" className="btn btn-success submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
