import Ember from 'ember';
import routerHelper from 'joda-core/utils/router-helper';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  routerHelper(this);
});

export default Router;
