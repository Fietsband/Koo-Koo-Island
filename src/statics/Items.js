window.Items = {
  potion: {
    title: "Potion",
    description: "Restores 25 hp",
    use: function(){
      document.getElementById("potion").remove();
      window.currentGame.player.increaseHealth(25);
    }
  },

  hiPotion: {
    title: "Hi-Potion",
    description: "Restores 100 hp",
    use: function(){
      document.getElementById("hiPotion").remove()
      window.currentGame.player.increaseHealth(100);
    }
  },

  ether: {
    title: "Ether",
    description: "Restores 15 mp",
    use: function(){
      document.getElementById("ether").remove()
      window.currentGame.player.increaseMagic(15);
    }
  },

  hiEther: {
    title: "Hi-Ether",
    description: "Restores 50 mp",
    use: function(){
      document.getElementById("hiEther").remove()
      window.currentGame.player.increaseMagic(50);
    }
  },

  elixer: {
    title: "Elixer",
    description: "Restores full hp and mp",
    use: function(){
      document.getElementById("elixer").remove()
      window.currentGame.player.increaseHealth(GameData.player.hp[1]);
      window.currentGame.player.increaseMagic(GameData.player.mp[1]);
    }
  },

  map: {
    title: "A partial map of the world",
    description: "A partial map of the world",
    use: function(){
      window.currentGame.callbacks.statsCallbacks.seashell.showMapPopup();
    }
  }
};
