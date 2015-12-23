/**
 * Created by apple on 15/12/23.
 */

'use strict'

import React, {
    Component,
    AppRegistry
} from 'react-native';
import { Provider } from 'react-redux/native';
import App from './Container/App';
import configureStore from './Store/configureStore';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import * as testAction from './Action/test';

const store = configureStore();

function mapStateToTopProps(state) {
    return {
        testCount: state.testCount?state.testCount:0,
    };
}

function mapDispatchToTopProps(dispatch) {
    return bindActionCreators(testAction, dispatch);
}

var A = connect(mapStateToTopProps, mapDispatchToTopProps)(App);

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <A />}
            </Provider>
        );
    }
};