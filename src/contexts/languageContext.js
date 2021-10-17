import React from "react";

const Context = React.createContext("turkish");
// creating context object, default selected lang is english
// arrays, objects, numbers can be passed through context

export class LanguageStore extends React.Component {
  state = { language: "turkish" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
