window.Items = {
  potion: {
    use: function(){
      window.currentGame.player.increaseHealth(25);
    }
  },

  hiPotion: {
    use: function(){
      window.currentGame.player.increaseHealth(100)
    }
  },

  elixer: {
    use: function(){
      window.currentGame.player.increaseHealth(GameData.player.hp[1]);
    }
  }
};
