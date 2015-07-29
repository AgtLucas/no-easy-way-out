/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StatusBarIOS,
  StyleSheet
} = React;

// var PageScroller = require('./examples/PageScroller');
// var CoverFlow = require('./examples/CoverFlow');
var AnimatedFormula = require('./examples/AnimatedFormula');
var PullToRefresh = require('./examples/PullToRefresh');
var Tree = require('./examples/PullToRefresh/Tree');
var WindowShade = require('./examples/WindowShade');

var newo = React.createClass({

  componentWillMount() {
    StatusBarIOS.setStyle('light-content');
  },

  render: function() {
    return(
      <PullToRefresh />
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('newo', () => newo);
