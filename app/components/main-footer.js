import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({

  classNameBindings: ['isSettings:footer-bg'],
  isSettings: false,

  router: inject("-routing"),

  //Set an observer on the router to invert the footer colors on the settings route
  didInsertElement: function() {
      let router = this.get("router");
      if(router.get('currentRouteName') == 'settings') this.set('isSettings', true);
      router.addObserver("currentRouteName", this, "routeChanged");
  },

  //Function call - every time the route changes
  routeChanged (router) {
    let currentRoute = router.get('currentRouteName');
    currentRoute == 'settings' ? this.set('isSettings', true) : this.set('isSettings', false);
  }

});
