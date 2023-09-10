import React from "react";
import ReactDOM from "react-dom/client";

// Manually use of react createElement

// const heading = React.createElement("h1",
// {id : "heading"},
// "Hello World from React :)");

// JSX -> JS Syntax to create React Element
// Note : JSX is not HTML inside Javascript , It is  HTML like JS Syntax
// JSX => React createElement => React Element(object) => HTML Element(While render)

// const JSXheading = <h1 id='heading'>Hello , I am inside JSX 🚀</h1>
let str = "I am a JSX" 

// React Functional Component

const A = () => <h1 id="heading">Namaste React 🚀</h1>;

const B = () => {
  return (
    <div>
         
      <A />
      {/* {A()} */}
      {str}
      <h1>I am inside component</h1>
    </div>
  );
};

// Note : when there is two component a and b and we call the component a in component b then it is known as component CompositionEvent.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<B />);
