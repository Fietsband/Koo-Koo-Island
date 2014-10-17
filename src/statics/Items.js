window.Items = {
  potion: {
    use: function(){
      document.getElementById("potion").remove();
      window.currentGame.player.increaseHealth(25);
    }
  },

  hiPotion: {
    use: function(){
      document.getElementById("hiPotion").remove()
      window.currentGame.player.increaseHealth(100);
    }
  },

  ether: {
    use: function(){
      document.getElementById("ether").remove()
      window.currentGame.player.increaseMagic(15);
    }
  },

  hiEther: {
    use: function(){
      document.getElementById("hiEther").remove()
      window.currentGame.player.increaseMagic(50);
    }
  },

  elixer: {
    use: function(){
      document.getElementById("elixer").remove()
      window.currentGame.player.increaseHealth(GameData.player.hp[1]);
      window.currentGame.player.increaseMagic(GameData.player.mp[1]);
    }
  },

  map: {

  }
};
