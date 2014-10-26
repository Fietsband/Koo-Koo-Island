Item.prototype = {
  add: function(){
    this.addParts();
    this.removeParts();
  },

  addParts: function(){
    var self = this;
    $.each(this.item, function(i){
      self.item[i].style.display = "inline";
      self.item[i].onclick = function(){
        self.onClickMethod();
      }
    });
  },

  clearOnClickMethod: function(){
    var self = this;
    this.onClickMethod = function(){};
    $.each(this.item, function(i){
      self.item[i].style.cursor = "default";
    });
  },

  removeParts: function(){
    var self = this;
    $.each(this.removals, function(i){
      self.removals[i].style.display = "none";
    });
  }
}

function Item(identifier, onClickMethod){
  this.item = dom.findClass(identifier);
  this.removals = dom.findClass(identifier+"-remove");
  this.onClickMethod = onClickMethod;
}
