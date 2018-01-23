import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  actions: {
    showInfo() {
      //Hide button and show hidden text
      $('#info-btn').addClass('hidden');
      $('#info-text').slideToggle();
    }
  }
  
});
