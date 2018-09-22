import React, {Component} from 'react';
import {connect} from "react-redux";

import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        const {addNum, reduceNum, counter} = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={() => addNum(1)}>Add</button>
                {counter}
                <button onClick={() => reduceNum(1)}>Minus</button>

            </div>
        );
    }
}

const addNum = (num) => {
    return {
        type: 'ADD_NUMBER',
        num
    }
}
const reduceNum = (num) => {
    return {
        type: 'REDUCE_NUMBER',
        num
    }
}
const mapStateToProps = state => {
    console.log('state', state)
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = {
    addNum,
    reduceNum
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
