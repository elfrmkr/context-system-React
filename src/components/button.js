import React from "react";
import languageContext from "../contexts/languageContext";
import colorContext from "../contexts/colorContext";

class Button extends React.Component {
  // special property name
  // static adds a property to the class itself
  /***static contextType = languageContext;
/* this is same as saying
Button.contextType = languageContext 
*/
  render() {
    //const text = this.context === 'english'? 'Submit' : 'Gönder'
    return (
      // providing function as a child in a react component while using Consumer
      /*
      We use consumer to get info from mutliple context objects inside of a single component
      */
      <colorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <languageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Gönder")}
            </languageContext.Consumer>
          </button>
        )}
      </colorContext.Consumer>
    );
  }
}

export default Button;
