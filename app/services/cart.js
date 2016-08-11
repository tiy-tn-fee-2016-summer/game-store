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
    // Go through all of the existing items
    const finder = this.items.reduce((snowball, current) => {
      // Check if the current data is the same as the new data
      if (current.data === data) {
        // Add one to the existing quantity for the current item
        return {
          items: [...snowball.items, { quantity: current.quantity + 1, data: current.data }],
          // Mark that the item was found
          // (we'll use this to decide if we need to add the "data" later)
          found: true,
        };
      }
      // Don't change any stuff, just add current to the list of items we're building back up
      return { items: [...snowball.items, current], found: snowball.found };
    },
    // Start where we haven't found a match yet and the items is empty
    { items: [], found: false });

    if (finder.found) {
      this.set('items', finder.items);
    } else {
      // If we haven't found the item, then this is a new cart item and should be added to the end!
      this.set('items', [...finder.items, { data, quantity: 1 }]);
    }
  },
});
