import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import axios from "axios";

import "./App.css";
import Home from "./pages/home/home.page";
import { ReactComponent as Logo } from "./images/CatwikiLogo.svg";
import { setBreeds } from "./redux/breeds-reducer/breeds-actions";
import { setTopBreeds } from "./redux/topBreeds-reducer/topBreeds-actions";
import TopBreeds from "./pages/top-breeds/top-breeds.page";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
  }

  componentDidMount() {
    this.setState({ loader: true });
    const allBreeds = axios.get(
      "https://catwikimern.herokuapp.com/api/breeds/"
    );
    const topBreeds = axios.get(
      "https://catwikimern.herokuapp.com/api/breeds/top-ten-breeds/"
    );
    axios.all([allBreeds, topBreeds]).then(
      axios.spread((res1, res2) => {
        this.props.setBreeds(res1.data.data.breeds);
        this.props.setTopBreeds(res2.data.breeds);
      })
    );
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top-breeds" component={TopBreeds} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBreeds: (state) => dispatch(setBreeds(state)),
    setTopBreeds: (state) => dispatch(setTopBreeds(state)),
  };
};

export default connect("", mapDispatchToProps)(App);
