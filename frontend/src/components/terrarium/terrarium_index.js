import React from 'react';
import TerrariumIndexItem from './terrarium_index_item';

class TerrariumIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllTerrariums();
  }

  render() {
    const { terrariums, fetchAllTerrariums } = this.props;

    return (
      <div>
        <div className="terrarium-container">
          <ul className="terrarium-un-list">
            <div className="all-terrariums-tag">Check out everyone's terrariums!</div>
            <div className="terrarium-index-item">
              {
                terrariums.map((terrarium, idx) => <TerrariumIndexItem
                  terrarium={terrarium}
                  idx={idx}
                  fetchAllTerrariums={fetchAllTerrariums}
                  key={terrarium._id}
                />)
              }
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default TerrariumIndex;