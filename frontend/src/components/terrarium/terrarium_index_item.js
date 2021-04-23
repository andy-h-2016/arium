import React from 'react';
import {Link} from 'react-router-dom'

class TerrariumIndexItem extends React.Component {


  render() {
    const { terrarium } = this.props;
    let stageOne = terrarium.level >= 0 && terrarium.level < 10;
    let stageTwo = terrarium.level >= 10 && terrarium.level < 20;
    let stageThree = terrarium.level >= 20 && terrarium.level <= 30;

    let terrariumPic;

    switch (true) {
      case stageOne:
        terrariumPic = <div className="desert"></div>;
        break;
      case stageTwo:
        terrariumPic = <div className="oasis"></div>;
        break;
      case stageThree:
        terrariumPic = <div className="forest"></div>;
        break;
      default:
        break;
    }


    return (
      <div className="terrariums-index-container">
          <ul className="terra-ul-index">
        <Link className="show-link" to={`/terrarium/${terrarium.userId}`}> 
            <div className="terra-title">
              {terrarium.title}
            </div>
            <div className="terra-stages">
              <div className="t-stage">{terrariumPic}</div>
            </div>
        </Link>
          </ul>
      </div>
    );
  }
}

export default TerrariumIndexItem;