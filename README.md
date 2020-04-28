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
     
1. Create typical menu-toggler.
2. Create mobile navigation component with any nesting and toggle elements. 
      
         <ul id="mobile-toggler">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
         </ul>
         
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
 
     document.addEventListener('DOMContentLoaded', function() {
        new MobileNav({
          nav: document.getElementById('mobile-nav'),
          navTogglers: [
              document.getElementById('mobile-toggler')
          ],
          linkTogglers: document.querySelectorAll('.link-toggler'),
          bodyClose: true
        })
      })