import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data'; 
import { Tasks } from '../api/tasks.js';

import Post from './Post';

class PostList extends Component {
    render() {
      return (
        <li>{this.props.task.text}</li>
      );
    }
  }