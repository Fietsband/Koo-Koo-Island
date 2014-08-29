Player.prototype = {
  setName: function(name){
    this.name = name;
  }
}

function Player(){
  this.inventory = new Inventory();
}
