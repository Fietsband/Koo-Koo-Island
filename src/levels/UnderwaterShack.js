window.UnderwaterShack = {
  initialize: function(){
    var whirlpoolArea = dom.find("#island-whirlpool-2");
    whirlpoolArea.onclick = function(){
      window.currentGame.levels.island.addToGame.bind(window.currentGame.levels.island)();
    }
    this.spawnFish();
  },

  spawnFish: function(){
    var self = this;
    this.fishSpawnInterval = setInterval(
      function(){
        if(self.fishCount() <= 5){
          var fish = self.fish();
          dom.findId("underwater_shack").appendChild(fish);
          window.Animations.FishSpawner.spawn(fish);
        }
      },
      this.calculateIntervalNumber()
    );
  },

  fish: function(){
    var fish        = dom.find(".enemies #tiny-fish").cloneNode(true);
    fish.className  = "us-tiny-fish";
    fish.id         = "fish-" + this.fishCount();
    fish.style.top  = (Math.round(Math.random() * 400) + 90) + "px";
    fish.onclick    = window.BattleInitializer.start.bind(this,
      "tiny-fish",
      this.destroy.bind(this),
      this.spawnFish.bind(this)
    );
    return fish;
  },

  fishCount: function(){
    return dom.find(".us-tiny-fish", true).length;
  },

  calculateIntervalNumber: function(){
    return Math.round(Math.random() * 7000) + 1000;
  },

  destroyFish: function(){
    $.each(dom.find(".us-tiny-fish", true), function(i, fish){
      fish.remove();
    });
  },

  destroy: function(){
    clearInterval(this.fishSpawnInterval);
    this.destroyFish();
  }
};
