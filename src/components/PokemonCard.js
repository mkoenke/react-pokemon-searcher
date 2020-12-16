import React from "react"
import { Card } from "semantic-ui-react"

class PokemonCard extends React.Component {
  state = { beenClicked: false }

  localClickHandler = () => {
    this.setState({ beenClicked: !this.state.beenClicked })
  }
  render() {
    return (
      <Card onClick={this.localClickHandler}>
        <div>
          <div className="image">
            <img
              src={
                this.state.beenClicked
                  ? this.props.pokemonObj.sprites.back
                  : this.props.pokemonObj.sprites.front
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
