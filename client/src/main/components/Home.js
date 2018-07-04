import React from 'react'
import './public/Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div id="rules-div">
        <h2 id="home-heading">Pairs</h2>
        <h3>How To Play</h3>
      <p id="rules">
      In turn, each player chooses two cards and turns them face up. If they are of the same rank (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades) then that player wins the pair and plays again. If they are not of the same rank, they are turned face down again and play passes to the next player.
      The game ends when the last pair has been picked up. The winner is the person with the most pairs.
    </p>
  </div>
  <div id="play-now-div">
  <Link id="play-now" to="/pairs"> Play Now </Link>
    </div>
    </div>

  ) // end of return
} // end of Home

export default Home;
