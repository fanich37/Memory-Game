import { connect } from 'react-redux';
import Final from '../components/Final/Final';

const mapStateToProps = state => ({
  moves: state.moves,
  stage: state.stage
});

const FinalContainer = connect(mapStateToProps)(Final);

export default FinalContainer;
