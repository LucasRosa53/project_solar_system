import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map((planeta) => {
            const { name, image } = planeta;
            return (
              <li key={ name }>
                <PlanetCard key={ name } planetName={ name } planetImage={ image } />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default SolarSystem;
// Com ajuda de guilherme santos!
