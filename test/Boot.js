function boot(){
  $.domReady(function(){
    window.Game = new Game();
    window.Stats = new Stats();
    // initializeAutoSaveButton();
    // initializeSaveButton();
    // initializeLoadButton();
  });
}
