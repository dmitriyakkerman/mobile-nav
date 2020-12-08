**Example**

https://codepen.io/mickyholbrook/pen/OJRXrvd

**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/mobile-nav.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/mobile-nav.js"></script>    
   
Or use import/require in your Javascript file:
    
    const MobileNav = require('./dist/js/mobile-nav.js');
    
    or
    
    import MobileNav from './dist/js/mobile-nav.js';
 
**Usage**
     
1. Create typical menu-toggler/burger.
2. Create mobile navigation component with any nesting and toggle elements. 
      
         <div id="mobile-toggler"></div>
         
         <ul id="mobile-nav">
           <li>
             <a href="">1</a>
             <span class="link-toggler"></span>
             <ul>
               <li>
                 <a href="">1.1</a>
                 <span class="link-toggler"></span>
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
             <span class="link-toggler"></span>
             <ul>
               <li>
                 <a href="">2.1</a>
                 <span class="link-toggler"></span>
                 <ul>
                   <li>
                     <a href="">2.1.1</a>
                   </li>
                 </ul>
               </li>
             </ul>
           </li>
         </ul>
         
**Initialization**

1. Specify root selector(string or DOM node) in "nav" option. 
2. Specify one or multiple nav togglers in "navTogglers" option.
3. Specify link togglers in "linkTogglers" option.
4. Specify if navigation should close after "click event" on any of links("false" by default).
5. Specify "preventParentClick" option for preventing click event on parent links which have child elements("false" by default).
 
         document.addEventListener('DOMContentLoaded', function() {
            new MobileNav({
              nav: '#mobile-nav',
              navTogglers: '.mobile-toggler',
              linkTogglers: '.link-toggler',
              bodyClose: true,
              preventParentClick: true
            })
          })