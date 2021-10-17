import React from "react";
import languageContext from "../contexts/languageContext";

class LanguageSelector extends React.Component {
  static contextType = languageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
          style={{ paddingLeft: "5px" }}
        />
        <i
          className="flag tr"
          onClick={() => this.context.onLanguageChange("turkish")}
          style={{ paddingLeft: "4px" }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
