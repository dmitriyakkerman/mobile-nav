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

      let that = this;

      that.nav = options.nav;
      that.navTogglers = options.navTogglers;
      that.linkTogglers = options.linkTogglers;
      that.bodyClose = options.bodyClose || false;
      that.preventParentClick = options.preventParentClick || false;

      that.nav.classList.add('mobile-nav');
      that.navTogglers.forEach(function(navToggler) {
        navToggler.classList.add('mobile-toggler');
      });

      that.navEvents();
      that.linkEvents();
      that.initPreventParentClick();
    }

    navEvents() {

      let that = this;

      if(that.bodyClose) {

        document.body.addEventListener('click', function (event) {
          console.log(that.bodyClose)

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

    initPreventParentClick() {

      let that = this;

      let mobileSubmenus = document.querySelectorAll('.mobile-nav > li > ul');

      if(that.preventParentClick && mobileSubmenus) {
        mobileSubmenus.forEach(function(mobileSubmenu) {
          let submenuToggler = mobileSubmenu.previousElementSibling.previousElementSibling;

          submenuToggler.addEventListener('click', function (e) {
            e.preventDefault()
          })
        })
      }
    }
  }

  return MobileNav;

}));