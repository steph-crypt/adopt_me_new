
import React from "react";
import ReactDOM from "react-dom";
import './Pet.js';

const App = () => {
    return React.createElement("div", { id: "something-important" }, [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, {
        name: "Rosie",
        animal: "Cat",
        breed: "Tabby" }),
      React.createElement(Pet, {
        name: "ِSpace",
        animal: "Cat",
        breed: "Tabby" }),
      React.createElement(Pet, {
        name: "Macky",
        animal: "Dog",
        breed: "Beagle" })
    ]);
  };

  ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
  );
