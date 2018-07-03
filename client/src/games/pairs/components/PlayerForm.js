import React,{Component} from 'react'

class PlayerForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      player: ''
    }

    this.handlePlayerAdd = this.handlePlayerAdd.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(event){
    this.setState({player: event.target.value})
  }

  handlePlayerAdd(event) {
    event.preventDefault()
    const submittedPlayer = this.state.player;
    this.props.onPlayerSubmit({player: submittedPlayer});
  }



  render(){

    let existingPlayers = this.props.players.map(player => (
      <li key = {player._id}>
        {player.Player}
      </li>
    ))

    return (
      <div>
        <div>
          <p>Players page</p>
          <form className="create-form" onSubmit={this.handlePlayerAdd}>
            <input type="text" placeholder="Enter User Name" value={this.state.player} onChange={this.handleTextChange}/>
            <input type="submit" value="Create A Player"/>
          </form>
        </div>

        <div>
          <ul>
            {existingPlayers}
          </ul>
        </div>
      </div>
    ) // end of return
  } // end of players
}

export default PlayerForm;
