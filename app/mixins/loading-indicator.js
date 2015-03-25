import Ember from 'ember';

var loaderOptions,
  loadingIndicator;

loaderOptions = {
  showSpinner: true
};

NProgress.configure(loaderOptions);

loadingIndicator = Ember.Mixin.create({
  actions:  {
    loading: function () {
      NProgress.start();
      this.router.one('didTransition', function () {
        NProgress.done();
      });

      return true;
    },

    error: function () {
      NProgress.done();
      return true;
    }
  }
});

export default loadingIndicator;
