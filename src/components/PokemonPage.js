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
    const data = {
      name: obj.name,
      hp: obj.hp,
      sprites: { front: obj.front, back: obj.back },
    }
    console.log(data)
    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((returnedPokemon) => {
        let newArray = [...this.state.pokemonArray, returnedPokemon]
        this.setState({ pokemonArray: newArray })
        console.log("Success new pokemon:", returnedPokemon)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
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
