Player.prototype = {
  setName: function(name){
    this.name = name;
  },

  buy: function(item){
    var sellPrice = sellPrices[item];
    if(GameData.player[sellPrice.type] >= sellPrice.value){
      GameData.player[sellPrice.type] -= sellPrice.value;
      var sellCount = window.Stats[sellPrice.type + "Count"]();
      sellCount.innerHTML = GameData.player[sellPrice.type];
      window.Stats.increaseStat(item, 1);
    }
  }
}

function Player(){
  this.inventory = new Inventory();
}
