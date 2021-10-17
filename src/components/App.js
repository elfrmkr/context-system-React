import React from "react";
import UserCreate from "./userCreate";
import { LanguageStore } from "../contexts/languageContext";
import colorContext from "../contexts/colorContext";
import LanguageSelector from "./languageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ padding: "12px" }}>
        <LanguageStore>
          <LanguageSelector />
          <colorContext.Provider value="red">
            <UserCreate />{" "}
          </colorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
