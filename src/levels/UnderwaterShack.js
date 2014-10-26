window.UnderwaterShack = {
  FISHES: [{name: "tiny-fish", probability: 5},
           {name: "tiny-fish-with-gun", probability: 2},
           {name: "big-fish", probability: 1}],

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
          var fish = self.buildFish();
          dom.findId("underwater_shack").appendChild(fish);
          window.Animations.FishSpawner.spawn(fish);
        }
      },
      this.calculateIntervalNumber()
    );
  },

  buildFish: function(){
    var fishType   = this.pickFish().name;
    var fish       = dom.find(".enemies #" + fishType).cloneNode(true);
    fish.className = "us-fish";
    fish.id        = "fish-" + this.fishCount();
    fish.style.top = (Math.round(Math.random() * 370) + 90) + "px";
    fish.onclick   = window.BattleInitializer.start.bind(this, ("btl-" + fishType), null, this.spawnFish.bind(this));
    return fish;
  },

  pickFish: function(){
    var fishes = [];
    for(var i = 0; i < this.FISHES.length; i++){
      for(var j = 0; j < this.FISHES[i].probability; j++){
        fishes.push(this.FISHES[i]);
      }
    }
    picked_fish = Math.round(Math.random() * (fishes.length - 1));
    return fishes[picked_fish];
  },

  fishCount: function(){
    return dom.find(".us-fish", true).length;
  },

  calculateIntervalNumber: function(){
    return Math.round(Math.random() * 7000) + 1000;
  },

  destroyFish: function(){
    $.each(dom.find(".us-fish", true), function(i, fish){
      fish.remove();
    });
  },

  destroy: function(){
    clearInterval(this.fishSpawnInterval);
    this.destroyFish();
  }
};
