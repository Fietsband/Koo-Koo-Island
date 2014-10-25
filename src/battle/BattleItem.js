BattleItem.prototype = {
  EXCLUDED_ITEMS: ["map"],

  add: function(){
    if(this.isExcluded()) return;
    this.item = this["create" + $.titleize(this.itemScope)]();
    dom.find("#battle-sequence-popup ul." + this.itemScope + ".list")
      .appendChild(this.item);
  },

  isExcluded: function(){
    return this.EXCLUDED_ITEMS.indexOf(this.identifier) !== -1;
  },

  createItems: function(){
    var pTag       = document.createElement("li");
    pTag.id        = this.identifier;
    pTag.innerHTML = this.itemOptions.title;
    pTag.title     = this.itemOptions.description;
    pTag.onclick   = this.itemOptions.use;
    return pTag;
  },

  createSkills: function(){
    var pTag       = document.createElement("li");
    pTag.innerHTML = this.itemOptions.title;
    pTag.title     = this.itemOptions.description;
    pTag.value     = this.identifier;
    return pTag;
  },

  createMagic: function(){
    var pTag       = document.createElement("li");
    pTag.innerHTML = this.itemOptions.title;
    pTag.title     = this.itemOptions.description;
    pTag.value     = this.identifier;
    return pTag;
  },

  getItemOptions: function(){
    var scope = $.titleize(this.itemScope);
    return window[scope][this.identifier];
  }
}

function BattleItem(identifier, itemScope){
  this.identifier    = identifier;
  this.itemScope     = itemScope;
  this.itemOptions   = this.getItemOptions();
}
