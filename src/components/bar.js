import move from 'move-js';

export const Bar = (function () {
  Bar.prototype = {
    render: function (element) {
      this.element = element;
    },

    renderWithStats: function (element, attributes) {
      this.render();

      const statsLeft = element.querySelector('.' + this.key + '_stats_left');
      const totalLeft = element.querySelector('.total_' + this.key);
      statsLeft.innerHTML = attributes.current;
      totalLeft.innerHTML = attributes.max;
    },

    fill: function(end) {
      move('.' + this.scope + ' .' + this.key + '.bar .inner_bar')
        .set('width', '100%')
        .ease('in')
        .duration(2000)
        .end(end.bind(this));
    }
  }

  function Bar(key) {
    const keys = key.split('.');
    this.scope = keys[0];
    this.key = keys[1];
  }

  return Bar;
})();
