import React from 'react';

class OverallConsumption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: this.props.overallConsumptions ? this.props.overallConsumptions.overall : ''
    }
  }

  componentDidMount() {
    this.props.fetchOverallConsumptions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.overallConsumptions && (prevProps.overallConsumptions.overall !== this.props.overallConsumptions.overall)) {
      this.setState({
        overall: this.props.overallConsumptions.overall
      });
    }
  }

  render() {
    let { overallConsumptions } = this.props;

    if (!overallConsumptions) return <div></div>;
    return (
      
      <div className="overall-page">
        <div className="overall-msg">Total Cups of Water Donated by You</div>
        <div className="overall-count">{overallConsumptions.overall}</div>
      </div>
    )
  }
}

export default OverallConsumption;