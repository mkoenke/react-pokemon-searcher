import React from "react"
import { Card } from "semantic-ui-react"
import PokemonCard from "./PokemonCard"

class PokemonCollection extends React.Component {
  pokemonArray = () => {
    return this.props.pokemonArray.map((pokemon) => (
      <PokemonCard pokemonObj={pokemon} />
    ))
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.pokemonArray()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
