import React, {Component} from 'react'
import PlayerForm from '../components/PlayerForm.js'

class PlayerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleTextChange(event){
    this.setState({text: event.target.value})
  }

  componentDidMount(){
    const url = '/api/users'
    fetch(url)
    .then(res => res.json())
    .then(players =>
      this.setState({
        players: players
      }));
    }

    handleSubmit(event){
      const player = event.player;
      if (!player){
        return
      }
      const url = 'http://localhost:3001/api/users'

      fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({"Player": player})
      })
      .then(response => response.json())
      .catch(error => console.error(`Fetch Error =\n`, error))
      this.setState({
        players: this.state.players})

        this.componentDidMount()
      } // end of handleSubmit

      render(){
        return (<PlayerForm players={this.state.players} onPlayerSubmit={this.handleSubmit}/>

        )// end of return
      } // end of render
    }  // end of class



    export default PlayerContainer;
