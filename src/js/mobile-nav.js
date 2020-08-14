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

      let that = this;

      that.nav = typeof options.nav === 'string' ? document.querySelector(options.nav) : options.nav;
      that.navTogglers = options.navTogglers;
       that.linkTogglers = options.linkTogglers;
      that.bodyClose = options.bodyClose || false;
      that.preventParentClick = options.preventParentClick || false;

      that.addClassesOnInit();
      that.navEvents();
      that.linkEvents();
      that.initPreventParentClick();
    }

    addClassesOnInit() {

      let that = this;

      that.nav.classList.add('mobile-nav');
      that.navTogglers.forEach(function(navToggler) {
        navToggler.classList.add('mobile-toggler');
      });
    }

    navEvents() {

      let that = this;

      that.navBodyClose();
      that.navTogglerEvents();
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

    navTogglerEvents() {

      let that = this;

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

    initPreventParentClick() {

      let that = this;

      if(that.linkTogglers) {
        that.linkTogglers.forEach(function(linkToggler) {
          let parentLink = linkToggler.previousElementSibling;

         if(that.preventParentClick) {
           parentLink.addEventListener('click', function (e) {
             e.preventDefault()
           })
         }
        })
      }
    }
  }

  window.MobileNav = MobileNav;

  return MobileNav;

}));
