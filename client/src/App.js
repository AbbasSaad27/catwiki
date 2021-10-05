import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import axios from "axios";

import "./App.css";
import Home from "./pages/home/home.page";
import Logo from "./components/logo/logo.component";
import { setBreeds } from "./redux/breeds-reducer/breeds-actions";
import { setTopBreeds } from "./redux/topBreeds-reducer/topBreeds-actions";
import TopBreeds from "./pages/top-breeds/top-breeds.page";
import BreedDetails from "./pages/breed-details/breed-details.pages";
import WithSpinner from "./components/with-spinner/with-spinner.component";

const HomeWithSpinner = WithSpinner(Home);
const TopBreedsWithSpinner = WithSpinner(TopBreeds);

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
        this.setState({ loader: false });
      })
    );
  }

  render() {
    return (
      <div className="App">
        <Logo
          onClick={() => this.props.history.push("/")}
          variant={"head-logo"}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomeWithSpinner isLoading={this.state.loader} {...props} />
            )}
          />
          <Route
            path="/top-breeds"
            render={(props) => (
              <TopBreedsWithSpinner isLoading={this.state.loader} {...props} />
            )}
          />
          <Route path="/breeds/:breedName" component={BreedDetails} />
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

export default connect("", mapDispatchToProps)(withRouter(App));
