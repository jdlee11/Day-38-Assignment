import React from 'react';
import Header from '../header';
import $ from 'jquery';
import SingleBand from '../singleBand';

let SearchPage = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: '',
      bandList: []
    };
  },
  searchFunction: function(e){
    e.preventDefault();
    let keywords = this.refs.terms.value;
    this.setState({searchTerm: keywords.replace(/ /g, "%20")});
    setTimeout(() => { // state would otherwise be set AFTER ajax request is made
      this.updateState();
    }, 500);
  },
  updateState: function(){
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: `https://api.spotify.com/v1/search?q=${this.state.searchTerm}&type=artist`,
      success: (response) => {
        this.setState({bandList: response.artists.items});
      }
    });
  },
  render: function(){
    let artists = this.state.bandList.map(function(band, i){
      return (<SingleBand band={band} key={i} canVote={true}/>);
    });
    return (
      <div>
        <Header/>
        <form className="search-form" onSubmit={this.searchFunction}>
          <input type="text" placeholder="Search by Artist" ref="terms"/>
          <input type="submit" value="search"/>
        </form>
        <div className="search-page">
          {artists}
        </div>
      </div>
    );
  }
});

export default SearchPage;
