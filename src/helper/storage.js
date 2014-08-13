GameStorage = {
  canStore: function(){
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
      return false;
    }
  },

  store: function(key, data){
    return localStorage.setItem(key, data);
  },

  get: function(key){
    return localStorage.getItem(key);
  }
}
