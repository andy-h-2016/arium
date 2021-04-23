import React from 'react';

class OverallConsumption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: this.props.overallConsumptions ? this.props.overallConsumptions.overall : ''
    }
    console.log(`label`, this.props.overallConsumptions);
  }

  componentDidMount() {
    this.props.fetchOverallConsumptions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.overallConsumptions && (prevProps.overallConsumptions.overall !== this.props.overallConsumptions.overall)) {
      this.setState({
        overall: this.props.overallConsumptions.overall
      });
      console.log(this.props.overallConsumptions);
    }
  }

  render() {
    let { overallConsumptions } = this.props;
    console.log(overallConsumptions);

    if (!overallConsumptions) return <div></div>;
    return (
      
      <div className="overall-page">
        <div className="overall-msg">Overall Water Consumption</div>
        <div className="overall-count">{overallConsumptions.overall}</div>
      </div>
    )
  }
}

export default OverallConsumption;