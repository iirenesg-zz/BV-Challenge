import Component from '@ember/component';

export default Component.extend({
  actions: {
    showForm(name, value) {
      $('#' + name + '-default').addClass('hidden');
      $('#' + name + '-hidden').removeClass('hidden');

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
