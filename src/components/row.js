import React, { Component } from "react";

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  handleChange(event) {
    console.log("name", event.target.name);
    var name = event.target.name;
    var value = event.target.value;

    // this.props.data[]
    let temp = this.state.data;
    temp[name] = value;

    this.setState(current => {
      return {
        ...current,
        data: temp
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.edit ? (
          <tr>
            {Object.keys(this.state.data).map(key => (
              <td>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.data[key]}
                  name={key}
                />
              </td>
            ))}
          </tr>
        ) : (
          <tr>
            {Object.keys(this.state.data).map(key => (
              <td>{this.state.data[key]}</td>
            ))}
          </tr>
        )}
      </React.Fragment>
    );
  }
}

export default Row;
