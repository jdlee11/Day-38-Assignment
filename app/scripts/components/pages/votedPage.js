import React from 'react';
import store from '../../store';
import Header from '../header';
import settings from '../../settings';
import SingleBand from '../singleBand';

let VotedPage = React.createClass({
  getInitialState: function(){
    return {
      bands: store.bandCollection.toJSON()
    };
  },
  componentDidMount: function(){
    store.bandCollection.fetch({
      headers: {
        'Authorization': 'Kinvey ' + settings.authtoken
      }
    });
    store.bandCollection.on('update change', this.updateState);
  },
  componentWillUnmount: function(){
    store.bandCollection.off('update change', this.updateState);
  },
  updateState: function(){
    this.setState({bands: store.bandCollection.toJSON()});
  },
  render: function(){
    let bandList = this.state.bands.map(function(band, i){
      return (<SingleBand band={band} key={i} canVote={false} />);
    });
    return (
      <div>
        <Header/>
        <div className="voted-page">
          {bandList}
        </div>
      </div>
    );
  }
});

export default VotedPage;
