/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class SwapiService {
  _apiBase = 'https://swapi.co/api';

  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarShip = async id => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => `${this._imageBase}/characters/${id}.jpg`;

  getStarShipImage = ({ id }) => `${this._imageBase}/starships/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this._imageBase}/planets/${id}.jpg`;

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = planet => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter
  });

  _transformStarship = starship => ({
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacture: starship.manufacture,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity
  });

  _transformPerson = person => ({
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color
  });
}

export default SwapiService;

// const arr1 = [1, 5, 8, 10];
// const arr2 = [2, 4, 7];

// const output = [...arr1, ...arr2]
//   .sort((a, b) => a - b)
//   .reverse()
//   .reduce((prev, curr) => prev + curr);
// console.log(output);
