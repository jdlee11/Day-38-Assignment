import Backbone from 'backbone';
import settings from '../settings';
import $ from 'jquery';
import { hashHistory } from 'react-router';

let Session = Backbone.Model.extend({
  login: function(data){
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: `https://baas.kinvey.com/user/${settings.appId}/login`,
      data: JSON.stringify(data),
      headers: {
        'Authorization': 'Basic ' + settings.basicAuth
      },
      success: function(response){
        settings.authtoken = response._kmd.authtoken;
        console.log('logged in succesfully');
        hashHistory.push('search');
      }
    }).fail(function(e){
      console.error('failed to log in: ', e);
    });
  },
  signup: function(data){
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: `https://baas.kinvey.com/user/${settings.appId}`,
      data: JSON.stringify({username: data.username, password: data.password}),
      headers: {
        'Authorization': 'Basic ' + settings.basicAuth
      },
      success: function(response){
        console.log('signed up succesfully');
        settings.authtoken = response._kmd.authoken;
        hashHistory.push('search');
      }
    }).fail(function(e){
      console.log('failed to sign up: ', e);
    });
  }
});

export default Session;
