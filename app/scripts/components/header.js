import React from 'react';
import Login from './login';
import { Link } from 'react-router';

let Header = React.createClass({
  styles: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
    margin: '10px'
  },
  render: function(){
    return (
      <div className="header">
        <Link style={this.styles} to="voted">See Voted Bands</Link>
        <Link style={this.styles} to="search">Search Bands</Link>
      </div>
    );
  }
});

export default Header;
