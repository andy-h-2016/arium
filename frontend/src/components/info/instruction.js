const instructionPage = () => {

  return (
    <div className='instruction-page'>
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
      <div>terra img here</div>

      <div className=''>
        <h2>Goal</h2>
        <p> You can update your daily water comsumption goal on My Terrarium page by cliccking Up or Down.</p>
      </div>

      <div className=''>
        <h2>Water Tracker</h2>
        <p>Click Add Water button when you drink a cup of water to keep track of your daily water comsumption.</p>
      </div>

      <div className=''>
        <h2>Daily Goal Streak</h2>
        <p>Meet your goal everyday! Your Terrarium will evolve faster if you keep your streak up!</p>
      </div>

      <div className=''>
        <h2>Terrarium Stages and levels</h2>
        <p>Your terrarium evolves after every 10 levels!</p>
        <p>Terrarium level goes up if you meet your daily goal.</p>
        <p>If you drink less than half of your goal, the terrarium level goes down.</p>
      </div>

      <div className=''>
        <h2>Rancking System</h2>
        <p>There are 5 ranks.</p>
        <p>Your Ranck will change on the Water Tracker page based on your streak.</p>
      </div>

      <div className=''>
        <h2>Countdown</h2>
        <p>On the side bar you will find a hourglass and 24 hour counddown below it.</p> 
        <p>Terrarium updates and Daily water consumption resets every 24 hour.</p>
      </div>

      <div className=''>
        <h2>Cups of Donation</h2>
        <p>On the side bar you will find __Cups Donation,</p>
        <p>The number is the total cups of water our users have drunk.</p> 
        <p>It is also the equivalent amount of cups of water donated to those in need.</p>
      </div>


    </div>
  )
}