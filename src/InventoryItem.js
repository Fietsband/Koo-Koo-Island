InventoryItem.prototype = {
  add: function(){
    this.item = this["create" + $.titleize(this.itemScope)]();
    dom.find("#inventory-stash ." + this.appendItemScope())
      .appendChild(this.item);
  },

  createItems: function(){
    var pTag       = document.createElement("a");
    pTag.id        = this.identifier;
    pTag.innerHTML = this.itemOptions.title;
    pTag.onclick   = this.itemOptions.use;
    return pTag;
  },

  createWeapons: function(){
    var pTag       = document.createElement("option");
    pTag.innerHTML = this.itemOptions.title;
    pTag.value     = this.identifier;
    return pTag;
  },

  createArmors: function(){
    var pTag       = document.createElement("option");
    pTag.innerHTML = this.itemOptions.title;
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

      case "armors":
        return this.itemScope + " #select-armor select";
      break;

      case "items":
        return this.itemScope;
      break;
    }
  },

  getItemOptions: function(){
    var scope = $.titleize(this.itemScope);
    return window[scope][this.identifier];
  }
}

function InventoryItem(identifier, itemScope){
  this.identifier    = identifier;
  this.itemScope     = itemScope;
  this.itemOptions   = this.getItemOptions();
}
