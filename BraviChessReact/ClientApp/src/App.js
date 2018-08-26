import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Help } from './components/Help';
import { Chessboard } from './components/Chessboard';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path='/chessboard' component={Chessboard} />
        <Route path='/help' component={Help} />
      </Layout>
    );
  }
}
