import Component from '@ember/component';

export default Component.extend({
  actions: {
    confirm(name) {
      if(name == 'new-password') {
        let value = $('#new-password').val();
        let field = $('#new-password-icon');
        value.length >= 8 ? field.addClass('valid') : field.removeClass('valid');
      } 

      else if(name == 'confirm-password') {
        let firstValue = $('#new-password').val();
        let value = $('#confirm-password').val();
        let field = $('#confirm-password-icon');
        
        if(firstValue == value) {
          field.removeClass('error');
          field.addClass('valid');
        } else if(firstValue.length <= value.length && firstValue != value) {
          field.removeClass('valid');
          field.addClass('error');
        } else {
          field.removeClass('valid');
          field.removeClass('error');
        }
      }
    }
  }
});
