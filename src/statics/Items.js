window.Items = {
  potion: {
    title: "Potion",
    use: function(){
      document.getElementById("potion").remove();
      window.currentGame.player.increaseHealth(25);
    }
  },

  hiPotion: {
    title: "Hi-Potion",
    use: function(){
      document.getElementById("hiPotion").remove()
      window.currentGame.player.increaseHealth(100);
    }
  },

  ether: {
    title: "Ether",
    use: function(){
      document.getElementById("ether").remove()
      window.currentGame.player.increaseMagic(15);
    }
  },

  hiEther: {
    title: "Hi-Ether",
    use: function(){
      document.getElementById("hiEther").remove()
      window.currentGame.player.increaseMagic(50);
    }
  },

  elixer: {
    title: "Elixer",
    use: function(){
      document.getElementById("elixer").remove()
      window.currentGame.player.increaseHealth(GameData.player.hp[1]);
      window.currentGame.player.increaseMagic(GameData.player.mp[1]);
    }
  },

  map: {
    title: "A partial map of the world",
    description: "A partial map of the world"
  }
};
