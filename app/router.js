import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.resource('dash', function() {
    this.route('hashtags');
    this.route('plan');
    this.route('account');
  });

  // 404 page for anything else
  this.route('error404', {path: '/*path'});
});

export default Router;
