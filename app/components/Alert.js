import React, { Component } from "react";
import PropTypes from "prop-types";
import DropdownAlert from "react-native-dropdownalert";

const AlertContext = React.createContext({});

export const AlertConsumer = AlertContext.Consumer;

export class AlertProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  dropdown = React.createRef();

  alertWithType = (...args) => this.dropdown.current.alertWithType(...args);

  render() {
    return (
      <AlertContext.Provider value={this.alertWithType}>
        {this.props.children}
        <DropdownAlert ref={this.dropdown} />
      </AlertContext.Provider>
    );
  }
}
