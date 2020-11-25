import { Event, Eventbus } from '../eventbus.js';

export const Rewarder = (function () {
  return {
    reward: function (player, rewards) {
      for (const i in rewards) {
        const reward = rewards[i];

        Eventbus.apply(
          new Event(reward.type + 'Rewarded', { reward: reward })
        );
      }
    }
  };
})();
