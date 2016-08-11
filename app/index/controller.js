import Ember from 'ember';

export default Ember.Controller.extend({
  dialog: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  cart: Ember.inject.service('cart'),

  actions: {
    addToCart(game) {
      this.get('dialog').createDialog({
        message: 'Are you sure?',
      }).then(() => {
        this.get('cart').addToCart(game);
      }).catch(() => {
        this.get('flashMessages').warning('We\'re so sorry to hear that...');
      });
    },
  },
});
