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

      if(!options.navTogglers.el) {
        throw new Error('Specify "el" option inside "navTogglers"')
      }

      if(!options.navTogglers.responsive) {
        throw new Error('Specify "responsive" option inside "navTogglers"')
      }

      if(!options.linkTogglers) {
        throw new Error('Specify "linkTogglers" selector')
      }

      this.nav = typeof options.nav === 'string' ? document.querySelector(options.nav) : options.nav;
      this.navTogglers = typeof options.navTogglers.el === 'string' ? document.querySelectorAll(options.navTogglers.el) : options.navTogglers.el;
      this.responsive = options.navTogglers.responsive;
      this.linkTogglers = typeof options.linkTogglers === 'string' ? document.querySelectorAll(options.linkTogglers) : options.linkTogglers;
      this.bodyClose = options.bodyClose || false;
      this.preventParentClick = options.preventParentClick || false;

      this.initClasses();
      this.navEvents();
      this.linkEvents();
    }

    initClasses() {
      let that = this;

      that.nav.classList.add('mobile-nav');
      that.navTogglers.forEach(function(navToggler) {
        navToggler.classList.add('mobile-toggler');
      });
    }

    navEvents() {
      this.navToggleEvents();
      this.navBodyClose();
    }

    linkEvents() {
      this.linkToggleEvents();
      this.parentLinkPrevent();
    }

    navBodyClose() {
      let that = this;

      if(that.bodyClose) {
        document.body.addEventListener('click', function (event) {
          if (!event.target.closest('.mobile-nav')) {
            that.nav.classList.remove('active');
            that.navTogglers.forEach(function(navToggler) {
              navToggler.classList.remove('active');
            });
          }
        });
      }
    }

    navToggleEvents() {
      let that = this;

      if(window.innerWidth <= that.responsive) {
        that.navTogglers.forEach(function (navToggler) {
          navToggler.style.display = 'block';
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

    linkToggleEvents() {
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
          });
        });
      }
    }

    parentLinkPrevent() {
      let that = this;

      if(that.linkTogglers) {
        that.linkTogglers.forEach(function(linkToggler) {
          let parentLink = linkToggler.previousElementSibling;

          if(that.preventParentClick) {
            parentLink.addEventListener('click', function (e) {
              e.preventDefault()
            });
          }
        });
      }
    }
  }

  window.MobileNav = MobileNav;

  return MobileNav;

}));
