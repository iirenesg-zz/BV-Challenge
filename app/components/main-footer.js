import Component from '@ember/component';

export default Component.extend({

  classNameBindings: ['isSettings:footer-bg'],
  isSettings: false,

  router: Ember.inject.service("-routing"),

  //Set an observer on the router to invert the footer colors on the settings route
  didInsertElement: function() {
      let router = this.get("router");
      if(router.get('currentRouteName') == 'settings') this.set('isSettings', true);
      router.addObserver("currentRouteName", this, "routeChanged");
  },

  //Function call - every time the route changes
  routeChanged (router, propertyName) {
    let currentRoute = router.get('currentRouteName');
    currentRoute == 'settings' ? this.set('isSettings', true) : this.set('isSettings', false);
  }

});
