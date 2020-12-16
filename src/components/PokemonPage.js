import React from "react"
import { Container } from "semantic-ui-react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"

class PokemonPage extends React.Component {
  state = { pokemonArray: [], searchValue: "" }
  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then((respo) => respo.json())
      .then((pokemonArray) => {
        this.setState({ pokemonArray })
        console.log(pokemonArray)
      })
  }
  submitHandler = (obj) => {
    console.log(obj)
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ searchValue: e.target.value })
  }

  filteredArray = () => {
    return this.state.pokemonArray.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    )
  }
  render() {
    console.log(this.state)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler} />
        <br />
        <Search changeHandler={this.changeHandler} />
        <br />
        <PokemonCollection pokemonArray={this.filteredArray()} />
      </Container>
    )
  }
}

export default PokemonPage
