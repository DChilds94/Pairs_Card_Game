import React, {Component} from 'react'
import Tile from "./Tile.js"
import StatsBox from "./StatsBox.js"
import './public/pairsTable.css'
import './public/statsBox.css'
import '../containers/public/pairContainer.css'
import FinishGame from './FinishGame.js'
const cardImage = require("./public/Card.png")


class PairsTable extends Component {
  constructor(props) {
    super(props);

    this.state = this.returnInitialState();
    this.handleTileClick = this.handleTileClick.bind(this);
    this.checkPairs = this.checkPairs.bind(this);
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.makeTilesDisabled = this.makeTilesDisabled.bind(this);
    this.hideCards = this.hideCards.bind(this);
    this.flipCards = this.flipCards.bind(this);
    this.showTiles = this.showTiles.bind(this);
    this.reset = this.reset.bind(this);
    this.updateTotalPairs = this.updateTotalPairs.bind(this);
    this.hideResetButtons = this.hideResetButtons.bind(this);
    this.setActivePlayer = this.setActivePlayer.bind(this);
  }

  returnInitialState(){
    return {
      counter: 0,
      card1Value: null,
      card1Index: null,
      card2Value: null,
      card2Index: null,
      pairsFound: this.initialisePairsFound(),
      turnsTaken: this.initialiseTurnsTaken(),
      players: this.props.players,
      currentPlayerIndex: 0,
      pairFlag: false,
      totalPairsFound: 0
    }
  }

  initialisePairsFound() {
    const pairsFound = {}
    this.props.players.forEach(player => {
      pairsFound[player] = 0
    })
    return pairsFound;
  }

  initialiseTurnsTaken(){
    const turnsTaken = {}
    this.props.players.forEach(player => {
      turnsTaken[player] = 0
    })
    return turnsTaken;
  }

  handleTileClick(event) {

    var tempCounter = this.state.counter;
    this.setState({counter: tempCounter += 1});

    const image = this.props.deck[event.target.value].image;
    event.target.style.backgroundImage = `url(${image})`;
    event.target.disabled = true;

    if(tempCounter === 1 ){
      this.handleFirstClick(event)
    }

    if (tempCounter === 2){
      this.handleSecondClick(event)
    }
  }

  handleFirstClick(event){
    this.setState({card1Value: this.props.deck[event.target.value].value})
    this.setState({card1Index: event.target.id})
  }

  handleSecondClick(event){
    this.setState({card2Value: this.props.deck[event.target.value].value})
    this.setState({card2Index: event.target.id})
    this.makeTilesDisabled(true);

    this.updateTurnsTaken();

    setTimeout(this.checkPairs, 1000);

    this.setState({counter: 0});
  }

  updateTurnsTaken(){
    const player = this.state.players[this.state.currentPlayerIndex]
    var turnCounter = this.state.turnsTaken[player];
    var duplicateTurnsTaken = this.state.turnsTaken;
    duplicateTurnsTaken[player] = turnCounter + 1;
    this.setState({
      turnsTaken: duplicateTurnsTaken
    })
  }

  checkPairs(){
    if(this.state.card1Value === this.state.card2Value){
      this.setState({pairFlag: true});
      setTimeout(this.hideCards, 1000)
      this.updatePairsFound()
      setTimeout(this.updateTotalPairs, 1000)
    } else {
      setTimeout(this.flipCards, 1000)
    }
    this.updateCurrentPlayer()

  }

  hideCards() {
    const button1 = document.getElementById(this.state.card1Index)
    const button2 = document.getElementById(this.state.card2Index)
    button1.hidden = true;
    button2.hidden = true;
    this.makeTilesDisabled(false)

  }

  updatePairsFound(){
    const player = this.state.players[this.state.currentPlayerIndex];
    var pairsCounter = this.state.pairsFound[player];
    var duplicatePairsFound = this.state.pairsFound;
    duplicatePairsFound[player] = pairsCounter + 1;
    this.setState({
      pairsFound: duplicatePairsFound
    })
  }

  updateTotalPairs(){
    var pairsCounter = this.state.totalPairsFound;
    pairsCounter += 1;
    this.setState({
      totalPairsFound: pairsCounter
    })
  }

  flipCards() {
    const button1 = document.getElementById(this.state.card1Index)
    const button2 = document.getElementById(this.state.card2Index)
    button1.style.backgroundImage = `url(${cardImage})`
    button2.style.backgroundImage = `url(${cardImage})`
    this.makeTilesDisabled(false)
  }

  flipAllCards() {
    const buttons = document.querySelectorAll('.tile-button')
    buttons.forEach(button => {
      button.style.backgroundImage = `url(${cardImage})`
    })
  }

  updateCurrentPlayer(){
    if(this.state.pairFlag === false){
      var currentIndex = this.state.currentPlayerIndex;
      if((currentIndex + 1) === this.state.players.length){
        currentIndex = 0
      } else
      {
        currentIndex += 1
      }
      this.setState({currentPlayerIndex: currentIndex})
    }
    this.setState({pairFlag: false});
  }

  makeTilesDisabled(value) {
    const reset = document.querySelectorAll('.reset-button')
    reset.forEach(button => {
      button.disabled = value;
    })

    const buttons = document.querySelectorAll('.tile-button')
    buttons.forEach(button => {
      button.disabled = value;
    })
  }

  showTiles(){
    const buttons = document.querySelectorAll('.tile-button')
    buttons.forEach(button => {
      button.hidden = false;
    })
  }

  reset(){
    this.setState(this.returnInitialState());
    this.flipAllCards();
    this.props.resetGameSamePlayers();
    this.showTiles();
    this.unHideResetButtons();
  }

  hideResetButtons() {
    const buttons = document.querySelectorAll(".reset-button")
    buttons.forEach(button => {
      button.hidden = true;
    })
  }

  unHideResetButtons() {
    const buttons = document.querySelectorAll(".reset-button")
    buttons.forEach(button => {
      button.hidden = false;
    })
  }

  setActivePlayer() {
    // const table = document.getElementById("xxx");
    // if (!table) return;
    // table.style="color: red !important";
    // const player = document.getElementById("row-" + this.state.currentPlayerIndex)
    // player.style="color: gold";
  }

  render() {

    var renderGame = null;
    // change to 26 at the end of development
    if (this.state.totalPairsFound === 1) {
      renderGame =
      <FinishGame
        players={this.props.players}
        pairs={this.state.pairsFound}
        turns={this.state.turnsTaken}
        resetGameNewPlayers = {this.props.resetGameNewPlayers}
        resetGameSamePlayers = {this.reset}
      />
      {this.hideResetButtons()}
    }
    else {
      renderGame = this.props.deck.map((card, index) => (
        <Tile key={index} onClickMethod={this.handleTileClick} index={index}/>
      )
    )
  }

  return(
    <div id="pairs-table-container">
      <div id="container-table-left">
        <div id="container-table-left-elements">

          <StatsBox players={this.props.players} pairs={this.state.pairsFound} turns={this.state.turnsTaken}/>
          <div id="reset-button-div">
            <button className="reset-button" onClick={this.reset}>Reset Game</button>
            <button className="reset-button" onClick={this.props.resetGameNewPlayers}>New Game</button>
          </div>
        </div>
      </div>
      <div id="container-table-center">
        {renderGame}
        {this.setActivePlayer()}
      </div>
      <div id="container-table-right">
        <h1 id="leaderboard">Leaderboard</h1>
      </div>
    </div>
  )
}
}
export default PairsTable
