import { FishAnimation } from './animation/fishAnimation.js';
import { ShootAttackAnimation } from './animation/ShootAttackAnimation.js';
import { SplashAttackAnimation } from './animation/SplashAttackAnimation.js';
import { TackleAttackAnimation } from './animation/TackleAttackAnimation.js';

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
