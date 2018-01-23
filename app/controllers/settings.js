import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  closeForm(name) {
    //Hides the form and shows the default disabled input
    $('#' + name + '-default').removeClass('hidden');
    $('#' + name + '-hidden').addClass('hidden');
    $('#' + name + '-message').removeClass('field-message-hidden');
    
    //Hides the confirmation message after some time
    setTimeout(() => {
      $('#' + name + '-message').addClass('field-message-hidden');
    }, 1500);
  },
  actions: {
    //Saves the name field
    saveName() {
      let value = $('#first-name').val() + ' ' + $('#last-name').val();
      $('#name').val(value);
      this.closeForm('name');
    },

    //Saves the email field
    saveEmail() {
      let value = $('#new-email').val();
      $('#email').val(value);
      this.closeForm('email');
    },

    //Saves the password field
    savePassword() {
      let value = $('#new-password').val();
      $('#password').val(value);
      this.closeForm('password');
    },

    //Cancel and close the form
    cancel(str) {
      $('#'+str+'-hidden').addClass('hidden');
      $('#'+str+'-default').removeClass('hidden');
    }
  }
});

