import React, { useRef } from "react"

class InstructionPage extends React.Component {
  constructor(props) {
    super(props)
    this.goalRef = React.createRef()
    this.trackerRef = React.createRef()
    this.streakRef = React.createRef()
    this.stageRef = React.createRef()
    this.rankRef = React.createRef()
    this.countdownRef = React.createRef()
    this.donationRef = React.createRef()

  }
  executeScroll = (location) => location.current.scrollIntoView()
  render() {

    return (
      <div className='instruction-page'>
        <h2 className='title-instruction'>What would you like to know about?</h2>
        <div className='table-con'>
          <div className='table-flex'>
            <div className='table-frame'>
              <p onClick={() => this.executeScroll(this.goalRef)} >Goal</p>
              <p onClick={() => this.executeScroll(this.trackerRef)} >Water Tracker</p>
              <p onClick={() => this.executeScroll(this.streakRef)} >Daily Goal Streak</p>
              <p onClick={() => this.executeScroll(this.stageRef)} >Terrarium Stages and Levels</p>
              <p onClick={() => this.executeScroll(this.rankRef)} >Ranking System</p>
              <p onClick={() => this.executeScroll(this.countdownRef)} >Countdown</p>
              <p onClick={() => this.executeScroll(this.donationRef)} >Cups Donated</p>
            </div>
          </div>

        </div>

        <div className='mid-section'>

          <div className='instruction01'>
            <div className='each-instruction goal'>
              <span className='arrow'></span>
              <h2 ref={this.goalRef}>Goal</h2>
              <p> You can update your daily water comsumption goal on your Terrarium page by clicking the Up or Down arrows.</p>
            </div>

            <div className='each-instruction tracker'>
              <span className='arrow'></span>
              <h2 ref={this.trackerRef}>Water Tracker</h2>

              <p>Click the Add Water button when you drink a cup of water to keep track of your daily water comsumption.</p>
              <p>Click the Oops button if you accidenly added too many cups of water</p>
            </div>

            <div className='each-instruction streak'>
              <span className='arrow'></span>
              <h2 ref={this.streakRef}>Daily Goal Streak</h2>

              <p>Try to meet your goal everyday!</p>
              <p>Your Terrarium will evolve faster if you keep your streak up and you will earn new titles as it increases!</p>
            </div>

            <div className='each-instruction stage'>
              <span className='arrow'></span>
              <h2 ref={this.stageRef}>Terrarium Stages and Levels</h2>

              <p>The way your Terrarium looks evolves every 10 levels!</p>
              <p>Your Terrarium level goes up by 1 every day that you meet your daily goal.</p>
              <p>If you drink less than half of your goal, the terrarium level will go down.</p>
            </div>

            <div className='each-instruction rank'>
              <span className='arrow'></span>
              <span className='arrow2'></span>
              <h2 ref={this.rankRef}>Ranking System</h2>

              <p>There are 5 ranks.</p>
              <p>Your Rank will change on the Water Tracker page based on your streak.</p>
            </div>
          </div>
          <div className='placeholder01'></div>
          <div className='terra-inst-img'></div>

        </div>

        <div className='bottom-section'>
          <div className='placeholder02'></div>
          <div className='tracker-inst-img'></div>
          <div className='instruction02'>

            <div className='each-instruction countdown'>
              <span className='arrow'></span>
              <h2 ref={this.countdownRef}>Countdown</h2>
              <p>In the sidebar you will find a 15 second timer.</p>
              <p>At the end of each time period, the Terrarium updates and the daily water count resets. </p>
              <p>For demo purposes, the time periods are only 15 seconds, but the actual live version of this site will be on a 24 hour cycle</p>
            </div>

            <div className='each-instruction donation'>
              <span className='arrow'></span>
              <h2 ref={this.donationRef}>Cups Donated</h2>
              <p>On the side bar you will see a number and Cups Donated,</p>
              <p>The number is the total cups of water all of our users have logged into our system.</p>
              <p>This number is very imporant because it is also the number of cups of water that have been donated.</p>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default InstructionPage;