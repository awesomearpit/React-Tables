import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-spinkit";
import Header from "./components/header";
import Row from "./components/row";

const URL = "https://api.myjson.com/bins/semrq";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      edit: false
    };
    // this.getContentData = this.getContentData.bind(this);
  }
  componentDidMount() {
    // this.getContetData();
  }

  getContentData() {
    this.setState({
      loading: true
    });
    fetch(URL)
      .then(response => response.json())
      .then(findResponse => {
        this.setState({
          data: findResponse,
          loading: false
        });
        console.log("this.state.data");
        console.log(this.state.data);
      });
  }

  editData() {
    this.setState({
      edit: true
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.loading ? (
          <div className="col-2 offset-6">
            <Spinner name="circle" color="steelblue" />
          </div>
        ) : null}
        <button
          className="btn btn-default"
          onClick={this.getContentData.bind(this)}
        >
          GetData
        </button>
        <button className="btn btn-default" onClick={this.editData.bind(this)}>
          Edit
        </button>
        <table class="table overflow">
          <thead>
            {this.state.data[0] ? (
              <Header data={this.state.data[0]} edit={this.state.edit} />
            ) : null}
          </thead>
          <tbody>
            {this.state.data.map((dynamicData, key) => (
              <Row data={dynamicData} edit={this.state.edit} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
