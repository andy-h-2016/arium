const instructionPage = () => {

  return (
    <div className='instruction-page'>
      <h2 className='title-instruction'>What would you like to know about?</h2>
      <div className='table-con'>
        <p>Goal</p>
        <p>Water Tracker</p>
        <p>Daily Goal Streak</p>
        <p>Terrarium Stages and Levels</p>
        <p>Ranking System</p>
        <p>Countdown</p>
        <p>Cups Donated</p>
      </div>

      {/* on hover arrow apper on the img to show wich sectionits its talking about */}
      <div className='mid-section'>
        {/* <div className='terra-inst-img'>terra img here</div> */}
        <div className='instruction01'>
          <div className='each-instruction'>
            <h2>Goal</h2>

            <p> You can update your daily water comsumption goal on your Terrarium page by clicking the Up or Down arrows.</p>
          </div>

          <div className='each-instruction'>
            <h2>Water Tracker</h2>
            <p>Click the Add Water button when you drink a cup of water to keep track of your daily water comsumption.</p>
            <p>Click the Oops button if you accidenly added too many cups of water</p>
          </div>

          <div className='each-instruction'>
            <h2>Daily Goal Streak</h2>
            <p>Try to meet your goal everyday!</p>
            <p>Your Terrarium will evolve faster if you keep your streak up and you will earn new titles as it increases!</p>
          </div>

          <div className='each-instruction'>
            <h2>Terrarium Stages and Levels</h2>
            <p>The way your Terrarium looks evolves every 10 levels!</p>
            <p>Your Terrarium level goes up by 1 every day that you meet your daily goal.</p>
            <p>If you drink less than half of your goal, the terrarium level will go down.</p>
          </div>

          <div className='each-instruction'>
            <h2>Ranking System</h2>
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
          <div className='each-instruction'>
            <h2>Countdown</h2>
            <p>In the sidebar you will find a 15 second timer.</p>
            <p>At the end of each time period, the Terrarium updates and the daily water count resets. </p>
            <p>For demo purposes, the time periods are only 15 seconds, but the actual live version of this site will be on a 24 hour cycle</p>
          </div>

          <div className='each-instruction'>
            <h2>Cups Donated</h2>
            <p>On the side bar you will see a number and Cups Donated,</p>
            <p>The number is the total cups of water all of our users have logged into our system.</p>
            <p>This number is very imporant because it is also the number of cups of water that have been donated.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default instructionPage;