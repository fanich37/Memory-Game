import { connect } from 'react-redux';
import App from '../components/App/App';

const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
