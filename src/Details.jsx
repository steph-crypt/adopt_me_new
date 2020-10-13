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
    if(this.state.loading) {
      return <h1>loading...</h1>
    }
    const { animal, breed, location, description, name } = this.state;

    return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt me!</button>
        <p>{`${description}`}</p>
      </div>
    </div>
    );
  }
}

export default Details;
