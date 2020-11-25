import { FishAnimation } from './animation/fishAnimation.js';
import { ShootAttackAnimation } from './animation/shootAttackAnimation.js';
import { SplashAttackAnimation } from './animation/splashAttackAnimation.js';
import { TackleAttackAnimation } from './animation/tackleAttackAnimation.js';
import { BarePlayerAttackAnimation } from './animation/barePlayerAttackAnimation.js';

export const Animation = (function () {
  const animations = {
    fishAnimation: FishAnimation,
    shootAttackAnimation: ShootAttackAnimation,
    splashAttackAnimation: SplashAttackAnimation,
    tackleAttackAnimation: TackleAttackAnimation,
    barePlayerAttackAnimation: BarePlayerAttackAnimation
  };

  Animation.prototype = {
    animate: function () {
      if (animations[this.type]) {
        return animations[this.type].call(this);
      } else {
        throw new Error('Unknown animation type ' + this.type);
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
