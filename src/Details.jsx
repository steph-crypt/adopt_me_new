import React from "react";

class Details extends React.component {
  //JS class that will inherit from a react component
  constructor(props) {
    super(props);

    Object.assign(oldState, newState)

    this.state = {
      loading: true
    };
  }
  componentDidMount () {
    pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState ({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      }, console.error);
  }
  render () {

  }
}

export default Details;
