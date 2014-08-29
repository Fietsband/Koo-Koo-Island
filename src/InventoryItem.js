InventoryItem.prototype = {
  add: function(){
    this.item = this.createItem();
    document.getElementById("inventory-stash").appendChild(this.item);
  },

  createItem: function(){
    var pTag = document.createElement("a");
    pTag.innerHTML = this.itemTitle;
    pTag.onclick = this.onClickMethod;
    return pTag;
  }
}

function InventoryItem(itemTitle, identifier, onClickMethod){
  this.itemTitle = itemTitle;
  this.identifier = identifier;
  this.onClickMethod = onClickMethod;
}
