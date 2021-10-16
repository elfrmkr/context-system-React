import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
// special property name
// static adds a property to the class itself
  static contextType = languageContext;
/* this is same as saying
Button.contextType = languageContext 
*/
 render() {
   const text = this.context === 'english'? 'Submit' : 'Gönder'
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
