**Example**

https://codepen.io/mickyholbrook/pen/OJRXrvd

**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/mobile-nav.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/mobile-nav.min.js"></script>      
 
**Usage**
     
1. Create typical menu-toggler/burger.
2. Create mobile navigation component with any nesting and toggle elements. 
      
        <div class="mobile-toggler toggler1">☰</div>
        <div class="mobile-toggler toggler2">☰</div>
        
        <ul class="mobile-nav" role="navigation">
            <li>
                <a href="">1</a>
                <button class="link-toggler">+</button>
                <ul>
                    <li>
                        <a href="">1.1</a>
                        <button class="link-toggler">+</button>
                        <ul>
                            <li>
                                <a href="">1.1.1</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="">2</a>
                <button class="link-toggler">+</button>
                <ul>
                    <li>
                        <a href="">2.1</a>
                        <button class="link-toggler">+</button>
                        <ul>
                            <li>
                                <a href="">2.1.1</a>
                                <button class="link-toggler">+</button>
                                <ul>
                                    <li>
                                        <a href="">2.1.1.1</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
         
**Initialization**

1. Specify root selector(string or DOM node) in "nav" option. 
2. Specify "navTogglers" option: one or multiple nav togglers selectors inside "el" option and media breakpoint of when your nav togglers are going to be visible.
3. Specify link togglers selector in "linkTogglers" option.
4. Specify "bodyClose" option if navigation should be closed after "click" out if it("false" by default).
5. Specify "preventParentClick" option for preventing "click" event on parent links which have child elements("false" by default).
 
        document.addEventListener('DOMContentLoaded', function() {
            new MobileNav({
                nav: '.mobile-nav',
                navTogglers: {
                  el: '.mobile-toggler', //or '.toggler1, .toggler2'
                  responsive: 767
                },
                linkTogglers: '.link-toggler',
                bodyClose: true,
                preventParentClick: true
            })
        });