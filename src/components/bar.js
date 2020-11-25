import anime from 'animejs/lib/anime.es.js';

export const Bar = (function () {
  function animateBar (extraOptions) {
    const targets = '.' + this.scope + ' .' + this.key + '.bar .inner_bar';
    const options = {
      targets: targets,
      easing: 'linear'
    };

    const animeOptions = Object.assign(options, extraOptions);
    anime(animeOptions);
  }

  Bar.prototype = {
    render: function (element) {
      this.element = element;
    },

    renderWithStats: function (element, attributes) {
      const totalLeft = element.querySelector('.total_' + this.key);

      this.render();
      this.current = attributes.current;
      this.max = attributes.max;

      this.statsLeft = element.querySelector('.' + this.key + '_stats_left');
      this.statsLeft.innerHTML = this.current;
      totalLeft.innerHTML = this.max;
    },

    add: function (value, end, duration = 1000) {
      this.current += value;
      const barWidth = Math.round((this.current / this.max) * 100) + '%';
      this.statsLeft.innerHTML = this.current;

      animateBar.call(this, {
        duration: duration,
        width: barWidth,
        complete: end.bind(this)
      });
    },

    empty: function (end) {
      animateBar.call(this, {
        duration: 1,
        width: '0%',
        complete: end.bind(this)
      });
    },

    fill: function (end) {
      animateBar.call(this, {
        duration: this.options.duration,
        width: '100%',
        complete: end.bind(this)
      });
    }
  };

  function Bar (key, options) {
    const keys = key.split('.');
    this.scope = keys[0];
    this.key = keys[1];
    this.options = options;
  }

  return Bar;
})();
