import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Header from './components/header';
import Login from './components/login';
import $ from 'jquery';
import settings from './settings';
import VotedPage from './components/pages/votedPage';
import SearchPage from './components/pages/searchPage';

// $(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
//   if (settings.authtoken) {
//     xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + settings.authtoken);
//   } else {
//     xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
//   }
// });

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={Login}/>
    <Route path="/voted" component={VotedPage}/>
    <Route path="/search" component={SearchPage}/>
  </Router>
);

ReactDOM.render(router, document.getElementById('container'));
