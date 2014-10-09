InventoryItem.prototype = {
  add: function(){
    this.item = this.createItem();
    document.getElementById("inventory-stash")
      .querySelector("." + this.itemScope)
      .appendChild(this.item);
  },

  createItem: function(){
    var pTag = document.createElement("a");
    pTag.innerHTML = this.itemTitle;
    pTag.onclick = this.onClickMethod;
    return pTag;
  }
}

function InventoryItem(itemTitle, identifier, itemScope, onClickMethod){
  this.itemTitle = itemTitle;
  this.identifier = identifier;
  this.itemScope  = itemScope;
  this.onClickMethod = onClickMethod;
}
