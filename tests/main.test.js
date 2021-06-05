/**
 * @jest-environment jsdom
 */

const MobileNav = require('../src/js/mobile-nav');
const mobileNavMarkup = require ('./mobile-nav-markup');

describe('MobileNav testing', () => {

    test('Defining NavMenu', () => {
        expect(window.MobileNav).toBeDefined();
        expect(MobileNav).toBeDefined();
    });

    document.body.innerHTML = mobileNavMarkup;

    let mobileNavInstance = new MobileNav({
        nav: '.mobile-menu',
        navTogglers: {
            el: '.toggler1, .toggler2',
            responsive: 991
        },
        linkTogglers: '.link-toggler',
        bodyClose: true,
        preventParentClick: true
    });

    test('Testing MobileNav instance', () => {
        expect(mobileNavInstance).not.toBeUndefined();
        expect(mobileNavInstance).toBeInstanceOf(MobileNav);
        expect(document.querySelector('.toggler1').classList.contains('mobile-toggler')).toBeTruthy();
        expect(document.querySelector('.toggler2').classList.contains('mobile-toggler')).toBeTruthy();
        expect(document.querySelector('.mobile-menu').classList.contains('mobile-nav')).toBeTruthy();
    });

});