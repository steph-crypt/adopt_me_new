import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, setAnimal] = useState("Cat");
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)} />
        </label>
        <label htmlFor="animal">
          Animal
          <input
            id="animal"
            value={animal}
            placeholder="Location"
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)} />

          <option>All</option>
          {ANIMALS.map(animal => (
            <option value={animal}>{animal}</option>
          ))}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
