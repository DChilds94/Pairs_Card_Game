import React,{Component} from 'react'
import './public/PlayerForm.css'

class PlayerForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      player: ''
    }

    this.handlePlayerAdd = this.handlePlayerAdd.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this)
  }

  handleTextChange(event){
    this.setState({player: event.target.value})
  }

  handlePlayerAdd(event) {
    event.preventDefault()
    const submittedPlayer = this.state.player;
    this.props.onPlayerSubmit({player: submittedPlayer});
  }

  handlePlayerDelete(event){
    this.props.onPlayerDelete(event.target.value)
  }



  render(){
    let existingPlayers = this.props.players.map((player, index) => (
      <div id = "map-players">
          <tr id="existing-players-table-row">
            <td key = {player._id} className="existing-players-table-data">
              {player.Player}
            </td>

            <td className ="existing-players-table-delete">
              <button id="existing-player-delete-button" onClick={this.handlePlayerDelete} value={player._id}>
                Delete Player
              </button>
            </td>
        </tr>
      </div>
    ))


    return (
      <div id = "create-list">
        <div id = "create">
          <div>
            <h3 className="players-page-heading">Add Player</h3>
          </div>
          <div id="form-div">
            <form className="create-form" onSubmit={this.handlePlayerAdd}>
              <input id="add-player-form" autoComplete="off" type="text" placeholder="Enter User Name" value={this.state.player} onChange={this.handleTextChange}/>
              <input id="add-player-button" type="submit" value="Add Player"/>
            </form>
          </div>
        </div>

        <div id = "list">
          <table>
            <tbody>
              <tr>
                <th><h3 className="players-page-heading">Players</h3></th>
              </tr>
              {existingPlayers}
            </tbody>

          </table>

        </div>
      </div>
    ) // end of return
  } // end of players
}

export default PlayerForm;
