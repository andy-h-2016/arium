import React from "react";
import { withRouter, Link } from "react-router-dom";
class Terrarium extends React.Component {
  constructor(props) {
    super(props);
    this.addWater = this.addWater.bind(this);
    this.removeWater = this.removeWater.bind(this);
    this.state = this.props.currentUser;
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentUser.goal !== this.props.currentUser.goal
    ) {
      this.setState(this.props.currentUser);
    }
  }

  renderTerra() {
    if (
      this.props.terrarium &&
      this.props.currentUser &&
      this.props.waterTracker
    ) {
      if (this.props.terrarium.level <= 9) {
        switch (true) {
          case this.props.waterTracker.today <
            Math.floor(0.5 * this.props.currentUser.goal):
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/dry-d.gif"
                alt="dry-d"
                width="700"
                height="850"
              ></img>
            );
          case this.props.waterTracker.today < this.props.currentUser.goal:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/normal-d.gif"
                alt="normal-d"
                width="700"
                height="850"
              ></img>
            );
          case this.props.waterTracker.today >= this.props.currentUser.goal:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/wet-d.gif"
                alt="wet-d"
                width="700"
                height="850"
              ></img>
            );
          default:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/normal-d.gif"
                alt="normal-d"
                width="700"
                height="850"
              ></img>
            );
        }
      } else if (
        this.props.terrarium.level < 20 &&
        this.props.terrarium.level >= 10
      ) {
        switch (true) {
          case this.props.waterTracker.today <
            Math.floor(0.5 * this.props.currentUser.goal):
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/dry-o.gif"
                alt="dry-o"
                width="700"
                height="850"
              ></img>
            );
          case this.props.waterTracker.today < this.props.currentUser.goal:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/normal-o.gif"
                alt="normal-o"
                width="700"
                height="850"
              ></img>
            );
          case this.props.waterTracker.today >= this.props.currentUser.goal:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/wet-o.gif"
                alt="wet-o"
                width="700"
                height="850"
              ></img>
            );
          default:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/normal-o.gif"
                alt="normal-o"
                width="700"
                height="850"
              ></img>
            );
        }
      } else {
        switch (true) {
          case this.props.waterTracker.today <
            Math.floor(0.5 * this.props.currentUser.goal):
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/dry-f.gif"
                alt="dry-f"
                width="700"
                height="850"
              ></img>
            );
          case this.props.waterTracker.today < this.props.currentUser.goal:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/normal-f.gif"
                alt="normal-f"
                width="700"
                height="850"
              ></img>
            );
          case this.props.waterTracker.today >= this.props.currentUser.goal:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/wet-f.gif"
                alt="wet-f"
                width="700"
                height="850"
              ></img>
            );
          default:
            return (
              <img
                className="im-the-terra"
                src="images/terra-stages/normal-f.gif"
                alt="normal-f"
                width="700"
                height="850"
              ></img>
            );
        }
      }
    }
  }

  addWater(e) {
    e.preventDefault();
    e.stopPropagation();
    let waterTracker = {
      ...this.props.waterTracker,
      type: 'increment',
      delta: 1
    };

    if (this.props.waterTracker.today >= 10) {
      return;
    }

    this.props.updateWaterTracker(waterTracker)
  }

  removeWater(e) {
    e.preventDefault();
    e.stopPropagation();
      let waterTracker = {
      ...this.props.waterTracker,
      type: 'increment',
      delta: -1
    };
    if (this.props.waterTracker.today <= 0) {
      return;
    }
    this.props.updateWaterTracker(waterTracker)
  }

  renderStatus() {
    const bonus = this.props.waterTracker.streak > 1 ? "bonus" : "";

    if (this.props.terrarium && this.props.waterTracker && this.state) {
      return (
        <div className="stat-innerbox">
          <div className="terra-row">
            <p>Goal</p>
            <button
              className="inc-goal"
              onClick={() =>
                this.props.updateUser(this.state.id, {
                  goal: this.state.goal + 1,
                })
              }
            ></button>
            <p className="row-number">{this.props.currentUser.goal}</p>
            <div className="upDown">
              <button
                className="dec-goal"
                onClick={() =>
                  this.props.updateUser(this.state.id, {
                    goal: this.state.goal - 1,
                  })
                }
              ></button>
            </div>
          </div>
          <div className="terra-row">
            <p>Cups of water today</p>
            <p className='row-number'>{this.props.waterTracker.today}</p>
          </div>
          <div className={`terra-row ${bonus}`}>
            <p>Daily goal streak</p>
            <p className="row-number">{this.props.waterTracker.streak}</p>
          </div>
          <div className="terra-row">
            <p>Terrarium level</p>
            <p className="row-number">{this.props.terrarium.level}</p>
          </div>
        </div>
      );
    }
  }

  render() {
    let { terrarium, waterTracker, currentUser } = this.props;
    if (!terrarium || !waterTracker || !currentUser) {
      return <div></div>;
    }

    return (
      <div className="terra-page">
        <h1 className="welcome-mes">
          {terrarium.title}
          <div className="info-container">

            <div className="tooltip">
              <div className="info-Link">
                <Link to={'/instruction'}>
                  <div className="info-link">
                    <i className="fas fa-info-circle"></i>
                  </div>
                </Link>
                <span className="tooltiptext">Information</span>
              </div>
            </div>
          </div>
        </h1>

        <div></div>
        <div className="on-shelf">
          {this.renderTerra()}

          <div className="status-terra-con">
            {this.renderStatus()}
            <div className="terra-btn-con">
              <button
                type="click"
                className="water-btn"
                onClick={this.addWater}
              >
                Add Water
              </button>
              <button
                type="click"
                className="water-btn"
                onClick={this.removeWater}
              >
                Oops
              </button>
            </div>
          </div>
        </div>
        <div className="im-shelf"></div>
      </div>
    );
  }
}

export default withRouter(Terrarium);
