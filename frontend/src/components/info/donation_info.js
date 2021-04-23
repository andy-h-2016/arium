import OverallConsumptionContainer from '../overall_consumption/overall_consumption_container';

const DonationInfoPage = (props) => {

  return (
    <div className="info-page">
      <a
        className="external-link about-header"
        rel="noreferrer"
        href="https://waterwellsforafrica.org/"
        target="_blank">Global Thirst
      </a>
      <div className="overall-water">
        <OverallConsumptionContainer />
      </div>
      <div className="about-info">
        <div className="about-body">When we talk about extreme poverty or world hunger, we’re also talking about global thirst. 
        The many ways that water affects our lives are also linked to the causes and effects of poverty — and breaking it.</div>
        <div className="about-body">Less than 1% of the world’s water supply is usable for us as humans (the rest is saltwater, in the form of ice, or underground).
        And of that 1%, we have to share it between 7.7 billion people around the globe.</div>
        <div className="about-body">This leaves 844 million people without access to clean water and 2.3 billion people without access to basic sanitation services. 
        This sets people up for a cycle of global thirst that feeds into the cycle of poverty.</div>
        <div className="about-body">This is why we made it our mission at Arium to donate clean water to countries in need. For every cup of water a user on this site
         records into their water tracker an equivalent amount of water is donated to a person living in poverty.  
        </div>
        <div className="about-body">Currently our primary receipient of all water donations is <a href="https://waterwellsforafrica.org/"> "https://waterwellsforafrica.org/"  
          </a> Please visit their website and contribute to them directly if you would like to donate money in addition to using our site.
        </div>
      
      </div>
    </div>
  )
}

export default DonationInfoPage;