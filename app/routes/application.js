import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ApplicationMain from 'joda-core/mixins/application-main';

export default Ember.Route.extend(ApplicationRouteMixin, ApplicationMain);
