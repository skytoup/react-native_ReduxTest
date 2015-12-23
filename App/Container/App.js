/**
 * Created by apple on 15/12/23.
 */

'use strict'

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    PropTypes,
    TouchableOpacity,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 44,
        paddingLeft: 20,
    },
});

export default class App extends Component {
    render() {
        var {testCount, testAction} = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>{testCount}</Text>
                <TouchableOpacity onPress={testAction}>
                    <Text>test()</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

App.propTypes = {
    testCount: PropTypes.number.isRequired,
    testAction: PropTypes.func.isRequired,
};