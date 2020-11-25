import { FishAnimation } from './animation/fishAnimation.js';
import { ShootAttackAnimation } from './animation/shootAttackAnimation.js';
import { SplashAttackAnimation } from './animation/splashAttackAnimation.js';
import { TackleAttackAnimation } from './animation/tackleAttackAnimation.js';
import { BarePlayerAttackAnimation } from './animation/barePlayerAttackAnimation.js';

export const Animation = (function () {
  Animation.prototype = {
    animate: function () {
      switch (this.type) {
        case 'fishAnimation': return FishAnimation.call(this);
        case 'shootAttackAnimation': return ShootAttackAnimation.call(this);
        case 'splashAttackAnimation': return SplashAttackAnimation.call(this);
        case 'tackleAttackAnimation': return TackleAttackAnimation.call(this);
        case 'barePlayerAttackAnimation': return BarePlayerAttackAnimation.call(this);
        default: throw new Error('Unknown animation type ' + this.type);
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
