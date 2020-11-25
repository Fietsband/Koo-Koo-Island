import { Progress } from '../../progress.js';

export const RewardBus = (function () {
  function seashellsRewarded (e) {
    const amount = e.params.reward.amount;
    Progress.setStat(function (stat) {
      stat.player.seashells += amount;
    });
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'seashellsRewarded':
          seashellsRewarded(e);
          break;
      }
    }
  };
})();
