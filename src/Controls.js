$.domReady(function(){
  initializeAutoSaveButton();
  initializeSaveButton();
  initializeLoadButton();
});

function initializeAutoSaveButton(){
  var autoSaveButton = document.getElementById("auto-save");
  changeAutoSaveButtonText(autoSaveButton);
  autoSaveButton.onclick = function(){
    window.Game.toggleAutoSave();
    changeAutoSaveButtonText(autoSaveButton);
  }
}

function  initializeLoadButton(){
  var loadButton = document.getElementById("laad");
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
    window.Game.save();
  }
}
