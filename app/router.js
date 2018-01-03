import EmberRouter from '@ember/routing/router';
import routerHelper from 'joda-core/utils/router-helper';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  routerHelper(this);
});

export default Router;
