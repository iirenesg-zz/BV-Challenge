import Component from '@ember/component';

export default Component.extend({

  classNameBindings: ['isSettings:footer-bg'],
  isSettings: false,

  router: Ember.inject.service("-routing"),

  didInsertElement: function() {
      let router = this.get("router");
      if(router.get('currentRouteName') == 'settings') this.set('isSettings', true);
      router.addObserver("currentRouteName", this, "routeChanged");
  },

  routeChanged (router, propertyName) {
    let currentRoute = router.get('currentRouteName');
    currentRoute == 'settings' ? this.set('isSettings', true) : this.set('isSettings', false);
  }

});
