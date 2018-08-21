import React, { Component } from 'react';
import facebook_icon from '../images/facebook_icon.svg';
import instagram_icon from '../images/instagram_icon.svg';
import '../App.css';

class SocialMedia extends Component {
  render() {
    return (
			<div>
                <a href="https://www.facebook.com/emilioturismo/" target="_blank">
				    <img src={facebook_icon} className="logo-social-media" alt="logo facebook" />
                </a>
                <a href="https://www.instagram.com/emilioturismo/" target="_blank">
                    <img src={instagram_icon} className="logo-social-media" alt="logo intagram" />
                </a>
			</div>
    );
  }
}

export default SocialMedia;
