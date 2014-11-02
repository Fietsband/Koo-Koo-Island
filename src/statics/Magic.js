window.Magic = {
  fire: {
    title: "Fire attack",
    description: "Releases a fire blast to an enemy",
    mp: -5,
    damage: 30,
    castTime: 1000,
    cast: function(){
      window.currentGame.player.magicAttack('fire');
    }
  }
};

$.freeze(window.Magic);
