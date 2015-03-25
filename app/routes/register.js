import Ember from 'ember';
import styleBody from '../mixins/style-body';
import loadingIndicator from '../mixins/loading-indicator';

export default Ember.Route.extend(styleBody, loadingIndicator, {
  classNames: ['instareal-signup']
});
