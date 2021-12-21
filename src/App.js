import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/index';

function App() {
	const root = useSelector((state) => state.root);

	const dispatch = useDispatch();

	const { add, subtract } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className="App">
			<h1>Test Redux</h1>
			<h2>{root}</h2>
			<button onClick={() => add()}>Add</button>
			<button onClick={() => subtract()}>Subtract</button>
		</div>
	);
}

export default App;
