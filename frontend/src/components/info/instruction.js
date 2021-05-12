const instructionPage = () => {

  return (
    <div className='instruction-page'>
      <h2 className='title-instruction'>What would you like to know about?</h2>
      <div className='table-con'>
        <p>Goal</p>
        <p>Water Tracker</p>
        <p>Daily Goal Streak</p>
        <p>Terrarium Stages and levels</p>
        <p>Rancking System</p>
        <p>Countdown</p>
        <p>Cups of Donation</p>
      </div>

      {/* on hover arrow apper on the img to show wich sectionits its talking about */}
      <div className='mid-section'>
        {/* <div className='terra-inst-img'>terra img here</div> */}
        <div className='instruction01'>
          <div className='each-instruction'>
            <h2>Goal</h2>
            <p> You can update your daily water comsumption goal on My Terrarium page by cliccking Up or Down.</p>
          </div>

          <div className='each-instruction'>
            <h2>Water Tracker</h2>
            <p>Click Add Water button when you drink a cup of water to keep track of your daily water comsumption.</p>
            <p>Click Oops button if you accidenly added too many cups</p>
          </div>

          <div className='each-instruction'>
            <h2>Daily Goal Streak</h2>
            <p>Meet your goal everyday! Your Terrarium will evolve faster if you keep your streak up!</p>
          </div>

          <div className='each-instruction'>
            <h2>Terrarium Stages and levels</h2>
            <p>Your terrarium evolves after every 10 levels!</p>
            <p>Terrarium level goes up if you meet your daily goal.</p>
            <p>If you drink less than half of your goal, the terrarium level goes down.</p>
          </div>

          <div className='each-instruction'>
            <h2>Rancking System</h2>
            <p>There are 5 ranks.</p>
            <p>Your Ranck will change on the Water Tracker page based on your streak.</p>
          </div>
        </div>
        <div className='terra-inst-img'></div>

      </div>

      <div className='bottom-section'>
        <div className='tracker-inst-img'></div>
        <div className='instruction02'>
          <div className='each-instruction'>
            <h2>Countdown</h2>
            <p>On the sidebar you will find a countdown until the next time period. </p>
            <p>At the end of each time period, the terrarium updates and the daily water count resets. </p>
            <p>For demo purposes, the time periods are 15 seconds, but the official version will be set at 24 hours</p>
          </div>

          <div className='each-instruction'>
            <h2>Cups of Donation</h2>
            <p>On the side bar you will find __Cups Donation,</p>
            <p>The number is the total cups of water all of our users have drunk.</p>
            <p>It is also the equivalent amount of cups of water donated to those in need.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default instructionPage;