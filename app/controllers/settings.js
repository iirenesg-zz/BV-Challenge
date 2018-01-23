import Controller from '@ember/controller';

export default Controller.extend({
  closeForm(name) {
    $('#' + name + '-default').removeClass('hidden');
    $('#' + name + '-hidden').addClass('hidden');
    $('#' + name + '-message').removeClass('field-message-hidden');
    
    setTimeout(() => {
      $('#' + name + '-message').addClass('field-message-hidden');
    }, 1500);
  },
  actions: {
    saveName() {
      let value = $('#first-name').val() + ' ' + $('#last-name').val();
      $('#name').val(value);
      this.closeForm('name');
    },

    saveEmail() {
      let value = $('#new-email').val();
      $('#email').val(value);
      this.closeForm('email');
    },

    savePassword() {
      let value = $('#new-password').val();
      $('#password').val(value);
      this.closeForm('password');
    },

    cancel(str) {
      $('#'+str+'-hidden').addClass('hidden');
      $('#'+str+'-default').removeClass('hidden');
    }
  }
});

