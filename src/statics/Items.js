window.Items = {
  potion: {
    use: function(){
      window.currentGame.player.increaseHealth(25);
    }
  },

  hiPotion: {
    use: function(){
      window.currentGame.player.increaseHealth(100);
    }
  },

  ether: {
    use: function(){
      window.currentGame.player.increaseMagic(15);
    }
  },

  hiEther: {
    use: function(){
      window.currentGame.player.increaseMagic(50);
    }
  },

  elixer: {
    use: function(){
      window.currentGame.player.increaseHealth(GameData.player.hp[1]);
      window.currentGame.player.increaseMagic(GameData.player.mp[1]);
    }
  }
};
