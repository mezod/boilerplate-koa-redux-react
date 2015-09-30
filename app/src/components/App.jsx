import React from 'react';
import Todo from './Todo.jsx';

require('./App.scss');

export default class App extends React.Component {
  render() {
    return <Todo />;
  }
}