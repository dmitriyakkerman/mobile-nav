Simple JS mobile navigation module for your website, which gives you possibility to get rid of routine

**Example**

https://codepen.io/mickyholbrook/pen/OJRXrvd

**Installation**

    1. Go to your project directory
    2. git clone https://github.com/dmitriyakkerman/mobile-nav-js.git .
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/mobile-nav.min.css">
     
    
  Put the script at the bottom of your markup: 

    <script src="./dist/js/mobile-nav.min.js"></script>      
 
**Usage**
     
1. Create typical menu-toggler/burger-menu(sometimes you need more than one toggler so you can use several ones if needed).
2. Create mobile navigation component with nesting and toggle elements. 
      
        <div class="mobile-toggler toggler1">☰</div>
        
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

1. Specify root selector in "nav" option. 
2. Specify "navTogglers" option: one or multiple nav toggle selectors inside "el" option and media breakpoint of when your nav toggle elements are going to be visible.
3. Specify link toggle selector in "linkTogglers" option.
4. Specify "bodyClose" option if navigation should be closed after "click" event fired out navigation root element("false" by default).
5. Specify "preventParentClick" option for preventing "click" event on links, which contain children("false" by default).
 
        document.addEventListener('DOMContentLoaded', function() {
            new MobileNav({
                nav: '.mobile-nav',
                navTogglers: {
                  el: '.mobile-toggler', //or '.toggler1, .toggler2' if you have several different togglers
                  responsive: 991
                },
                linkTogglers: '.link-toggler',
                bodyClose: true,
                preventParentClick: true
            })
        });