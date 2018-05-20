import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from './test-actions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
	render() {
		const { data, increment, decrement } = this.props;
		return (
			<div>
				<h1>Test component</h1>
				<p>{data}</p>
				<p>
					<Button onClick={increment}>increment</Button>
					<Button onClick={decrement}>decrement</Button>
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	data: state.test.data,
});

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(incrementCounter()),
	decrement: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
