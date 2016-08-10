import React from 'react';
import store from '../store';
import settings from '../settings';

let SingleBand = React.createClass({
  voteFunction: function(){
    store.bandCollection.create(this.props.band, {
      headers: {
        'Authorization': 'Kinvey ' + settings.authtoken
      },
      success: function(response) {
        console.log('band added!');
        console.log(response);
      }
    });
  },
  render: function(){
    let imageSrc;
    if (this.props.band.images[0]){
      imageSrc = this.props.band.images[0].url;
    } else {
      imageSrc = "http://placehold.it/150x150";
    }
    let voteButton;
    if (this.props.canVote){
      voteButton = (<input onClick={this.voteFunction} type="button" value="vote" ref="vote"/>);
    }
    return (
      <div className="single-band">
        <img className="band-image" src={imageSrc} />
        <p>{this.props.band.name}</p>
        {voteButton}
      </div>
    );
  }
});

export default SingleBand;
