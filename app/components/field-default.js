import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  actions: {
    showForm(name, value) {
      //Hide disabled input and show forn
      $('#' + name + '-default').addClass('hidden');
      $('#' + name + '-hidden').removeClass('hidden');

      //Takes the previous values and fills the new input fields
      if(name == 'name') {
        let args = value.split(' ');
        $('#first-name').val(args[0]);
        $('#last-name').val(args[1]);
      } else if(name == 'email') {
        $('#new-email').val(value);
      }
    }
  }
});
