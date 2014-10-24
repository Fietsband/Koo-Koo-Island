window.Animations.FishSpawner = {
  spawn: function(fish){
    var animationTime = Math.round(Math.random() * 10000) + 15000;
    move(fish)
      .duration(animationTime)
      .end();

    move(fish)
      .set('left', (window.screen.width + 100) + "px")
      .ease('in')
      .duration(animationTime)
      .end(function(){
        fish.remove();
      })
  }
};
