import { moduleFor, test } from 'ember-qunit';
import { buildQuantity } from 'game-store/services/cart';

moduleFor('service:cart', 'Unit | Service | cart', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('buildQuantity: it can add new items', (assert) => {
  const result = buildQuantity([{ data: 'foo', quantity: 1 }], { data: 'bar', quantity: 3 });

  assert.deepEqual(result, [
    { data: 'foo', quantity: 1 },
    { data: 'bar', quantity: 3 },
  ]);
});

test('buildQuantity: it can add quantity to existing items', (assert) => {
  const result = buildQuantity([{ data: 'foo', quantity: 1 }], { data: 'foo', quantity: 4 });

  assert.deepEqual(result, [
    { data: 'foo', quantity: 5 },
  ]);
});

// Replace this with your real tests.
test('it can add an item', function (assert) {
  const service = this.subject();

  service.addToCart({
    name: 'foo',
  });

  assert.equal(service.items.length, 1,
    'There should be one item in the items array after calling "addToCart"');
  assert.deepEqual(service.items[0], {
    quantity: 1,
    data: {
      name: 'foo',
    },
  });

  service.addToCart({
    name: 'bar',
  });

  assert.equal(service.items.length, 2,
    'There should be two item in the items array after calling "addToCart" again');
  assert.deepEqual(service.items[1], {
    quantity: 1,
    data: {
      name: 'foo',
    },
  });
  assert.deepEqual(service.items[0], {
    quantity: 1,
    data: {
      name: 'bar',
    },
  });
});

test('it can determine quantity if an item is added twice', function (assert) {
  const service = this.subject();

  const item = {
    name: 'foo',
  };

  service.addToCart(item);
  service.addToCart(item);
  service.addToCart(item);

  assert.equal(service.items.length, 1,
    'There should be one item in the items array after calling "addToCart" with the same item');

  assert.deepEqual(service.items[0], {
    quantity: 3,
    data: item,
  });
});
