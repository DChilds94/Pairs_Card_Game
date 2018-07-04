import React from 'react'
import './public/About.css'
const linkedin = require("./public/linkedin.png")
const github = require("./public/github.png")

const About = () => {
  return (

    <div id="about-container">

      <div id="container-about-left">

        <div id="contributors">

          <div id="ruaridh-div">
            <p className="profile-name">Ruaridh Dunbar</p>
            <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQGe4OnflyXvtw/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=uE-dOR4_E3hLx_JAmwHutdIC9tg0HueIIHN8QDbXQ3M" alt="Ruaridh"/>
            <div className="social-media-div">
              <a href="https://www.linkedin.com/in/ruaridh-dunbar/"><img className="linkedin" src={linkedin}/></a>
              <a href="https://github.com/RuaridhD"><img className="github" src={github}/></a>
            </div>
          </div>


          <div id="connor-div">
            <p className="profile-name">Connor Rose</p>
            <img className="profile-pic" src="https://media.licdn.com/dms/image/C4D03AQGGUzjKBm3aqQ/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=QjUd0Mc80mwUENu9ZwhavriQdBZd19BDz_uLqBx3pEA" alt="Connor"/>
            <div className="social-media-div">
              <a href="https://www.linkedin.com/in/connor-rose/"><img className="linkedin" src={linkedin}/></a>
              <a href="https://github.com/omikron15"><img className="github" src={github} /></a>
            </div>
          </div>

        </div>
      </div>


      <div id="container-about-center">

        <div id="about-heading-div">
          <h1 id="about-heading">JavaScript Group Project</h1>
        </div>

        <div id="project-div">

          <div id="project-brief">

            <p>Create a browser game based on an existing card or dice game. Model the game logic and then display it in the browser for a user to interact with. For this project the team decided to create the classic card game Pairs.
            </p>
          </div>

          <div id="mvp-extensions-div">
            <div id='mvp'>
              <h3 id="mvp-heading">MVP</h3>
              <ul>
                <li class="brief-list">Play a single player game of Pairs</li>
                <li class="brief-list">Query a cards API and display interactive cards</li>
              </ul>
            </div>

            <div id="extensions">
              <h3 id="extensions-heading">Extensions</h3>
              <ul>
                <li class="brief-list">Create a two player game</li>
                <li class="brief-list">Display a live scoreboard</li>
                <li class="brief-list">Track and display previous moves</li>
                <li class="brief-list">Track game history</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="container-about-right">
        <div id="contact-div">

          <div id="daniel-div">
            <p className="profile-name">Daniel Childs</p>
              <img className="profile-pic" src="https://media.licdn.com/dms/image/C4D03AQEjBknAUodZLw/profile-displayphoto-shrink_200_200/0?e=1536192000&v=beta&t=NXWNthMTcIudT9jF-gbAG4zDf6ijloZPpublVJYK2pM" alt="Daniel"/>
              <div className="social-media-div">
                <a href="https://www.linkedin.com/in/dchilds1/"><img className="linkedin" src={linkedin}/></a>
                <a href="https://github.com/DChilds94"><img className="github" src={github}/></a>
              </div>
            </div>



            <div id="brian-div">
              <p className="profile-name">Brian Cooke</p>
              <img className="profile-pic" src="https://media.licdn.com/dms/image/C5603AQECbkPCd0QoPA/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=p6-uw8Wfs9_rODFdmpoNS9si2bIbUpe0OaM_kry2KUU" alt="Brian"/>
              <div className="social-media-div">
                <a href="https://www.linkedin.com/in/b-cooke/"><img className="linkedin" src={linkedin}/></a>
                <a href="https://github.com/bcooke84"><img className="github" src={github}/></a>
              </div>
            </div>


        </div>
      </div>
    </div>


    ) // end of return
  } // end of About

  export default About
