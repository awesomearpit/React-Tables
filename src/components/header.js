import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          {Object.keys(this.props.data).map(key => (
            <th>{key}</th>
          ))}

          {/* <td>{dynamicData.first_name}</td> */}
        </tr>
      </React.Fragment>
    );
  }
}

export default Header;
