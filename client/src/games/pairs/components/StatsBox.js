import React, {Component} from 'react'
import './public/statsBox.css'
import './PairsTable.js'

class StatsBox extends Component {

  render() {
    var playersList = this.props.players.map((player,index) =>(
      <tr key={index} id={"row-" + index}>
        <td className="stat-player" >{player}</td>
        <td className="stats-player" >{this.props.turns[player]}</td>
        <td className="stats-player">{this.props.pairs[player]}</td>
      </tr>
    ))
    return (
      <div id="stats-box">
        <h3 id="stats-heading">Game Stats</h3>
        <div id="xxx">
          <table>
          <tbody>
            <tr>
              <th className="stats-table-heading">Player</th>
              <th className="stats-table-heading">Turns</th>
              <th className="stats-table-heading">Pairs</th>
            </tr>
            {playersList}
          </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default StatsBox;
