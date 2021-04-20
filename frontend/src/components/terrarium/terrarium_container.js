import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import Terrarium from './terrarium';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newTweet: state.tweets.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);