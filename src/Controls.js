Controls.prototype = {
  initializeAutoSaveButton: function(){
    this.changeAutoSaveButtonText();
    this.autoSaveButton.onclick = function(){
      window.currentGame.toggleAutoSave();
      this.changeAutoSaveButtonText();
    }
  },

  initializeSaveButton: function(){
    this.saveButton.onclick = function(){
      window.currentGame.save();
    }
  },

  initializeLoadButton: function(){
    var loadPopup = new Popup("load-game-popup",
      this.load.initializeLoadPopupButtons.bind(this),
      this.load.disableLoadPopupButtons.bind(this)
    );

    this.loadButton.onclick = function(){
      loadPopup.show();
    }
  },

  changeAutoSaveButtonText: function(){
    this.autoSaveButton.innerHTML = this.getAutoSaveText();
  },

  getAutoSaveText: function(){
    if(GameData.settings.autoSaveEnabled){
      return "Auto save: on";
    }
    else{
      return "Auto save: off";
    }
  },

  load: {
    initializeLoadPopupButtons: function(){
      var self = this;
      this.getCurrentSaveGame.onclick = function(){
        var gameData = window.currentGame.getCurrentGame();
        self.loadGameForm.innerHTML = gameData;
      }

      this.loadGameButton.onclick = function(){
        var loadPrompt = confirm("Are you sure you want to load this game?");
        if(loadPrompt){
          window.currentGame.loadGame(self.loadGameForm.value);
          window.location.reload();
        }
      }
    },

    disableLoadPopupButtons: function(){
      this.getCurrentSaveGame     = null;
      this.loadGameButton.onclick = null;
      this.loadGameForm.innerHTML = "";
    }
  }
}

function Controls(){
  this.saveButton         = document.getElementById("save");
  this.autoSaveButton     = document.getElementById("auto-save");
  this.loadButton         = document.querySelector("button#load");
  this.getCurrentSaveGame = document.getElementById("get-current-game");
  this.loadGameButton     = document.getElementById("load-current-game");
  this.loadGameForm       = document.querySelector("textarea#load-game-form");
}

window.enableControls = (function(){
  window.currentControls = new Controls();
  window.currentControls.initializeAutoSaveButton();
  window.currentControls.initializeSaveButton();
  window.currentControls.initializeLoadButton();
});
