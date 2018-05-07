import React, { Component } from 'react';
import { Posts } from '../../collections/Posts';

// Task component - represents a single todo item
export default class Post extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Posts.update(this.props.post._id, {
      $set: { pinned: !this.props.post.pinned },
    });
  }

  render() {
    return (
      <li>
        <input
        type="checkbox"
        readOnly
        checked={!!this.props.task.checked}
        onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}