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

  removeParts: function(){
    var self = this;
    $.each(this.removals, function(i){
      self.removals[i].style.display = "none";
    });
  }
}

function Item(identifier, onClickMethod){
  this.item = document.getElementsByClassName(identifier);
  this.removals = document.getElementsByClassName(identifier+"-remove");
  this.onClickMethod = onClickMethod;
}
