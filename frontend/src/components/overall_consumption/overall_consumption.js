import React from 'react';

class OverallConsumption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: this.props.overallConsumptions ? this.props.overallConsumptions.water : ''
    }
  }

  componentDidMount() {
    this.props.fetchOverallConsumptions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.overallConsumptions && (prevProps.overallConsumptions.water !== this.props.overallConsumptions.water)) {
      this.setState({
        overall: this.props.overallConsumptions.water
      });
    }
  }

  render() {
    let { overallConsumptions } = this.props;

    if (!overallConsumptions) return <div></div>;
    return (
      <React.Fragment>
        <div className="cup">
          <div className="overall-count">{overallConsumptions.water}</div>
        </div>
      </React.Fragment>
        
    )
  }
}

export default OverallConsumption;