import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  classNameBindings: ['onScroll:header-mini'],
  onScroll: false,
  menuOpen: false,

  actions: {
    showMenu() {
      //Slides the menu into view, pushing the rest of the page
      $('#mobile-nav').toggleClass('nav-mobile-container-open');
      $('body').toggleClass('push-body');
      let time = 400;
      if(this.menuOpen) time = 100;

      //Shows or hides the red background and close button 
      setTimeout(() => {
        $('#mobile-bg').toggleClass('mobile-bg-shown');
        $('#close-menu-btn').toggleClass('icon-menu-close-shown');
        this.menuOpen = !this.menuOpen;
      }, time)

    }
  },

  didInsertElement() {
    let headerComponent = this;

    //Resize the logo and main navigation bar on scroll
    $(document).scroll(() => {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 30 && !headerComponent.onScroll) {
        headerComponent.toggleProperty('onScroll');
      } else if (scrollTop < 30 && headerComponent.onScroll) {
        headerComponent.toggleProperty('onScroll');
      }
    });
  }
});
