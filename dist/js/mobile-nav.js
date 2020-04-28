(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MobileNav = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  class MobileNav {

    constructor(options = {}) {

      if(!options.nav) {
        throw new Error('Specify nav selector')
      }
      if(!options.navTogglers) {
        throw new Error('Specify navigation toggle selectors')
      }
      if(!options.linkTogglers) {
        throw new Error('Specify navigation links toggle selectors')
      }

      let defaults = {
        bodyClose: true
      };

      let that = this;

      that.nav = options.nav;
      that.navTogglers = options.navTogglers;
      that.linkTogglers = options.linkTogglers;

      that.nav.classList.add('mobile-nav');
      that.navTogglers.forEach(function(navToggler) {
        navToggler.classList.add('mobile-toggler');
      });

      that.mergeOptions(defaults, options);
      that.navEvents();
      that.linkEvents();
    }

    mergeOptions(defaults, options) {

      let that = this;

      that.options = {...defaults, ...that.options}
    }

    navEvents() {

      let that = this;

      if(that.options.bodyClose) {

        document.body.addEventListener('click', function (event) {

          if (!event.target.closest('.mobile-nav')) {
            that.nav.classList.remove('active');
            that.navTogglers.forEach(function(navToggler) {
              navToggler.classList.remove('active');
            });
          }

        });
      }

      that.navTogglers.forEach(function(navToggler) {

        navToggler.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopImmediatePropagation();

          if (that.nav.classList.contains('active')) {
            that.nav.classList.remove('active');
            that.navTogglers.forEach(function(navToggler) {
              navToggler.classList.remove('active');
            });
          }
          else {
            that.nav.classList.add('active');
            that.navTogglers.forEach(function(navToggler) {
              navToggler.classList.add('active');
            });
          }
        });

      });
    }

    linkEvents() {

      let that = this;

      if(that.linkTogglers) {
        that.linkTogglers.forEach(function(linkToggler) {
          linkToggler.addEventListener('click', function() {
            if(this.classList.contains('active')) {
              this.classList.remove('active');
              this.previousElementSibling.classList.remove('active');
              this.nextElementSibling.classList.remove('active');
            }
            else {
              this.classList.add('active');
              this.previousElementSibling.classList.add('active');
              this.nextElementSibling.classList.add('active');
            }
          })
        })
      }
    }
  }

  return MobileNav;

}));