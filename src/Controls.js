function initializeAutoSaveButton(){
  var autoSaveButton = document.getElementById("auto-save");
  changeAutoSaveButtonText(autoSaveButton);
  autoSaveButton.onclick = function(){
    window.currentGame.toggleAutoSave();
    changeAutoSaveButtonText(autoSaveButton);
  }
}

function initializeLoadButton(){
  var loadButton = document.querySelector("button#load");
  var loadPopup = new Popup("load-game-popup", initializeLoadPopupButtons, disableLoadPopupButtons);
  loadButton.onclick = function(){
    loadPopup.show();
  }
}

function initializeLoadPopupButtons(){
  // init
}

function disableLoadPopupButtons(){
 // remove
}

function changeAutoSaveButtonText(autoSaveButton){
  autoSaveButton.innerHTML = getAutoSaveText();
}

function getAutoSaveText(){
  if(GameData.settings.autoSaveEnabled){
    return "Auto save: on";
  }
  else{
    return "Auto save: off";
  }
}

function initializeSaveButton(){
  var saveButton = document.getElementById("save");
  saveButton.onclick = function(){
    window.currentGame.save();
  }
}
