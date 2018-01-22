import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['onScroll:header-mini'],
  onScroll: false,

  didInsertElement() {
    let headerComponent = this;

    Ember.$(document).scroll(() => {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 30 && !headerComponent.onScroll) {
        headerComponent.toggleProperty('onScroll');
      } else if (scrollTop < 30 && headerComponent.onScroll) {
        headerComponent.toggleProperty('onScroll');
      }
    });
  }
});
