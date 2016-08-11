import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service('cart'),
  actions: {
    addToCart(game) {
      this.get('cart').addToCart(game);
    },
  },
});
