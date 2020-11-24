import { FishAnimation } from './animation/fishAnimation.js';
import { ShootAttackAnimation } from './animation/shootAttackAnimation.js';
import { SplashAttackAnimation } from './animation/splashAttackAnimation.js';
import { TackleAttackAnimation } from './animation/tackleAttackAnimation.js';
import { BarePlayerAttackAnimation } from './animation/barePlayerAttackAnimation.js';

export const Animation = (function () {
  Animation.prototype = {
    animate: function () {
      switch (this.type) {
        case 'fishAnimation':
          FishAnimation.call(this);
          break;
        case 'shootAttackAnimation':
          ShootAttackAnimation.call(this);
          break;
        case 'splashAttackAnimation':
          SplashAttackAnimation.call(this);
          break;
        case 'tackleAttackAnimation':
          TackleAttackAnimation.call(this);
          break;
        case 'barePlayerAttackAnimation':
          BarePlayerAttackAnimation.call(this);
          break;
      }
    }
  };

  function Animation (type, thing, end) {
    this.type = type;
    this.thing = thing;
    this.end = end;
  }

  return Animation;
}());
