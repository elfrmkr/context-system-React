import React from "react";
import UserCreate from "./userCreate";
import languageContext from "../contexts/languageContext";
import colorContext from "../contexts/colorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container" style={{ padding: "12px" }}>
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
            style={{ paddingLeft: "5px" }}
          />
          <i
            className="flag tr"
            onClick={() => this.onLanguageChange("turkish")}
            style={{ paddingLeft: "4px" }}
          />
        </div>
        <colorContext.Provider value="red">
          <languageContext.Provider value={this.state.language}>
            <UserCreate />{" "}
          </languageContext.Provider>
        </colorContext.Provider>
      </div>
    );
  }
}

export default App;
