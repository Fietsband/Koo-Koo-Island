InventoryItem.prototype = {
  add: function(){
    this.item.style.display = "block";
  }
}

function InventoryItem(identifier, onClickMethod){
  this.item = document.getElementById(identifier);
  //this.item.onclick = onClickMethod;
}
