import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

<<<<<<< HEAD
Router.map(function () {
  this.route('register');
  this.route('login');
=======
Router.map(function() {
  this.route('register');
  this.route('login');

  this.route('admin');
>>>>>>> ec071b703dc40f217513eb4b722382fd1f685012
});
export default Router;
