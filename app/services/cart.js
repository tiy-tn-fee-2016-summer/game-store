import Ember from 'ember';

export function buildQuantity(snowball, item) {
  const existing = snowball.findBy('data', item.data);

  // check if item we are adding is already in snowball
  if (existing) {
    // @todo This is dirty but I don't want to do splicing and slicing...
    Ember.set(existing, 'quantity', existing.quantity + item.quantity);
    return snowball;
  }
  return [...snowball, item];
}

export default Ember.Service.extend({
  items: [],

  addToCart(data) {
    this.set('items', this.items.reduce(buildQuantity, [{ quantity: 1, data }]));
  },
});
