import React, { Component } from 'react';
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <form id='name-form'>
					<label>
						Name:
						<input type="text" name="name" />
					</label>
					<input type="submit" value="Submit" />
				</form>

      </div>
    );
  }
}

export default Content;


