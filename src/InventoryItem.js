InventoryItem.prototype = {
  add: function(){
    this.item = this["create" + $.titleize(this.itemScope)]();
    document.querySelector("#inventory-stash ." + this.appendItemScope())
      .appendChild(this.item);
  },

  createItems: function(){
    var pTag       = document.createElement("a");
    pTag.id        = this.identifier;
    pTag.innerHTML = this.itemTitle;
    pTag.onclick   = this.onClickMethod;
    return pTag;
  },

  createWeapons: function(){
    var pTag       = document.createElement("option");
    pTag.innerHTML = this.itemTitle;
    pTag.value     = this.identifier;
    return pTag;
  },

  createArmor: function(){
    var pTag       = document.createElement("option");
    pTag.innerHTML = this.itemTitle;
    pTag.value     = this.identifier;
    return pTag;
  },

  createMagic: function(){

  },

  appendItemScope: function(){
    switch(this.itemScope){
      case "weapons":
        return this.itemScope + " #select-weapons select";
      break;

      case "armor":
        return this.itemScope + " #select-armor select";
      break;

      default:
        return this.itemScope;
      break;
    }
  }
}

function InventoryItem(itemTitle, identifier, itemScope, onClickMethod){
  this.itemTitle     = itemTitle;
  this.identifier    = identifier;
  this.itemScope     = itemScope;
  this.onClickMethod = onClickMethod;
}
