import React, {Component} from 'react'
import PairsTable from "../components/PairsTable.js"
import './pairContainer.css'
import PlayersSelector from '../components/PlayersSelector.js'


class PairContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      players: []
    }
    this.resetGameNewPlayers = this.resetGameNewPlayers.bind(this);
    this.resetGameSamePlayers = this.resetGameSamePlayers.bind(this);
    this.selectPlayers = this.selectPlayers.bind(this);
    // this.getPlayersFromDB = this.getPlayersFromDB.bind(this);
  }

  // removed this <p>This is a pairs containers</p>

  render() {

    var gameRender = null;
    if (this.state.players.length === 0){
      gameRender = <PlayersSelector buttonClick={this.selectPlayers}/>
    }else {
      gameRender = <PairsTable deck={this.state.deck} resetGameSamePlayers={this.resetGameSamePlayers} resetGameNewPlayers={this.resetGameNewPlayers} players={this.state.players}/>
    }

    return (
      <div id="pair-container">
        {gameRender}
      </div>
    )
  }

componentDidMount(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))


    const newArray = [];
    const url2 = "/api/users";
    fetch(url2)
      .then(res => res.json())
      .then(players => players.forEach(player => {
        newArray.push(player.Player);
      })).then(Deck => this.setState({players: newArray}))


  }

  resetGameNewPlayers(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards, players: []}))
  }

  resetGameSamePlayers(){
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    fetch(url)
    .then(res => res.json())
    .then(Deck => this.setState({deck: Deck.cards}))
  }

  selectPlayers(event){

      var playerNo = event.target.value;
      var playersArray = [];
      switch(playerNo) {
    case "1":
        playersArray = ["Player 1"]
        break;
    case "2":
        playersArray = ["Player 1", "Player 2"]
        break;
    case "3":
        playersArray = ["Player 1", "Player 2", "Player 3"]
        break;
    case "4":
        playersArray = ["Player 1", "Player 2", "Player 3", "Player 4"]
        break;
}
        this.setState({players: playersArray})
  }

  getPlayersFromDB(){
    // const url = "/api/users";
    // fetch(url)
    //   .then(res => res.json())
    //   .then(players => this.setState({
    //     players: [players[0].Player]
    //   }));


  }


}



export default PairContainer;
