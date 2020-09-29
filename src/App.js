const Pet = ({ name, animal, breed }) => {
return React.createElement("div", {}, [
  React.createElement("h1", {}, name),
  React.createElement("h2", {}, animal),
  React.createElement("h2", {}, breed)
  ]);
};

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
