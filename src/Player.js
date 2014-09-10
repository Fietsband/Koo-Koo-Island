Player.prototype = {
  setName: function(name){
    this.name = name;
  },

  buy: function(item){
    var sellPrice = sellPrices[item];
    if(GameData.player[sellPrice.type] >= sellPrice.value){
      window.Stats.increaseStat(item, 1);
      var sellType = sellPrice.type.substring(0, sellPrice.type.length - 1);
      window.Stats.increaseStat(sellType, (sellPrice.value * -1));
    }
  }
}

function Player(){
  this.inventory = new Inventory();
}
