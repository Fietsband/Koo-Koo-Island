Popup.prototype = {
  show: function(){
    this.popup.style.display = "block";
  },

  hide: function(){
    this.popup.style.display = "none";
  },

  addCloseListener: function(){
    var self = this;
    this.closeButton.onclick = function(){
      self.hide();
    }
  }
};

function Popup(identifier){
  this.popup = document.getElementById(identifier);
  this.closeButton = document.getElementById(identifier + "-close");
  this.addCloseListener();
}
