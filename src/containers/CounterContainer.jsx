import { connect } from 'react-redux';
import Counter from '../components/Counter/Counter';

const mapStateToProps = state => ({
  moves: state.moves,
  stage: state.stage
});

const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
