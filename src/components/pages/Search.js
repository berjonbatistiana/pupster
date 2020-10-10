import React from "react";
import API from "../../utils/API";

class Search extends React.Component {

  state = {
    dog: "",
    dogImgs: []
  }

  searchBreed = (breed) => {

    API.searchBreed(breed.toLowerCase())
      .then(response => {
        console.log(response.data.message);
        this.setState({ dogImgs: response.data.message });
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.searchBreed(this.state.dog);
  }

  handleInputChange = (e) => {
    this.setState({ dog: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Search Dog</h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.dog}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Breed"
              id="search"
            />
            <br />
            <button onClick={this.handleFormSubmit} className="btn btn-primary">
              Search
        </button>
          </div>
        </form>
        {this.state.dogImgs.map(dog => {
          return (
            <img src={dog} alt="a dog" />
          );
        })}
      </div>
    );
  }

}

export default Search;
