import React from "react"
import { Form } from "semantic-ui-react"

class PokemonForm extends React.Component {
  state = { name: "", hp: "", sprites: { front: "", back: "" } }

  localChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({
      sprites: {
        ...this.state.sprites,
        front: e.target.value,
        back: e.target.value,
      },
    })
  }

  getObj = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.getObj}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.localChangeHandler}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={this.localChangeHandler}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="sprites.front"
              value={this.state.sprites.front}
              onChange={this.localChangeHandler}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="sprites.back"
              value={this.state.sprites.back}
              onChange={this.localChangeHandler}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
