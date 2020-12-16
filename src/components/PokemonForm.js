import React from "react"
import { Form } from "semantic-ui-react"

class PokemonForm extends React.Component {
  state = { name: "", hp: "", front: "", back: "" }

  localChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getObj = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ name: "", hp: "", front: "", back: "" })
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
              name="front"
              value={this.state.front}
              onChange={this.localChangeHandler}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="back"
              value={this.state.back}
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
