import React from "react";
import { withRouter } from "react-router-dom";

class TerrariumShow extends React.Component {
  componentDidMount() {
    this.props.fetchUserTerrarium(this.props.match.params.id);
  }

  renderTerra() {
    if (this.props.terrarium) {
      if (this.props.terrarium.level <= 9) {
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
      if (this.props.terrarium.level < 20 && this.props.terrarium.level >= 10) {
        return (
          <img
            className="im-the-terra"
            src="images/terra-stages/normal-o.gif"
            alt="normal-o"
            // width="700"
            // height="850"
          ></img>
        );
      } else {
        return (
          <img
            className="im-the-terra"
            src="images/terra-stages/normal-f.gif"
            alt="normal-f"
            // width="700"
            // height="850"
          ></img>
        );
      }
    }
  }

  render() {
    if (!this.props.terrarium) {
      return <div></div>;
    }
    return (
      <div className="terra-page">
        <h1 className="welcome-mes">{this.props.terrarium.title}</h1>
        <div></div>
        <div className="on-shelf">{this.renderTerra()}</div>
        <div className="im-shelf"></div>
      </div>
    );
  }
}

export default withRouter(TerrariumShow);
