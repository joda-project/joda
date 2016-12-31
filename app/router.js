import Ember from 'ember';
import routerHelper from 'joda-core/utils/router-helper';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('404', {
    path: '*path'
  });
  this.route('login');

  routerHelper(this);
});

export default Router;
