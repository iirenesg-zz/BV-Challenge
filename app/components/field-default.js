import Component from '@ember/component';

export default Component.extend({
  actions: {
    showForm(str) {
      $('#' + str + '-default').addClass('hidden');
      $('#' + str + '-hidden').removeClass('hidden');
    }
  }
});
