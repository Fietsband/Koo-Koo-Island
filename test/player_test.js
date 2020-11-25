/* global QUnit */
import { Player } from '../src/components/player.js';
import { Progress } from '../src/components/progress.js';

QUnit.module('Player', function () {
  QUnit.test('should add things to inventory', function (assert) {
    const player = Player;
    player.inventory.add('items', { type: 'potion', hp: 25 });
    const inventoryItems = Progress.getStat('player', 'inventory').items;

    assert.equal(inventoryItems.length, 1);
  });
});
