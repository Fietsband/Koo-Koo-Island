/* global QUnit */
import { Rewarder } from '../../src/components/battle/rewarder.js';
import { Enemy } from '../../src/components/enemy.js';
import { Player } from '../../src/components/player.js';
import { Progress } from '../../src/components/progress.js';

QUnit.module('Battle/Rewarder', function () {
  QUnit.test('rewards a player with items', function (assert) {
    const enemy = new Enemy('fish');
    const player = Player;
    Rewarder.reward(player, enemy.rewards);

    const totalSeashells = Progress.getStat('player', 'seashells');

    assert.equal(totalSeashells, 10);
  });
});
