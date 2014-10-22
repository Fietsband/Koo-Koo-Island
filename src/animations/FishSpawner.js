window.Animations.FishSpawner = {
  spawn: function(fish){
    move(fish)
      .duration('20s')
      .end();

    move(fish)
    .set('left', (window.screen.width + 100) + "px")
    .ease('in')
    .duration('20s')
    .end(function(){
      fish.remove();
    })
  }
};
