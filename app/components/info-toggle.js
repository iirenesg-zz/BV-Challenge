import Component from '@ember/component';

export default Component.extend({

  actions: {
    showInfo() {
      $('#info-btn').addClass('hidden');
      $('#info-text').slideToggle();
    }
  }
  
});
