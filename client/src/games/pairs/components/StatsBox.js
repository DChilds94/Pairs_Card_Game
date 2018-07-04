import React, {Component} from 'react'
import './public/statsBox.css'

class StatsBox extends Component {

  render() {
    var playersList = this.props.players.map((player,index) =>(
      <tr key={index}>
        <td>{player}</td>
        <td>{this.props.turns[player]}</td>
        <td>{this.props.pairs[player]}</td>
      </tr>
    ))
    return (
      <div id="stats-box">
        <h3 id="stats-heading">Game Stats</h3>
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
    )
  }

}

export default StatsBox;
