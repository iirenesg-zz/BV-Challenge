import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['onScroll:header-mini'],
  onScroll: false,
  menuOpen: false,

  actions: {
    showMenu() {
      $('#mobile-nav').toggleClass('nav-mobile-container-open');
      $('body').toggleClass('push-body');
      let time = 400;
      if(this.menuOpen) time = 100;

      setTimeout(() => {
        $('#mobile-bg').toggleClass('mobile-bg-shown');
        $('#close-menu-btn').toggleClass('icon-menu-close-shown');
        this.menuOpen = !this.menuOpen;
      }, time)

    }
  },

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
