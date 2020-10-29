import {html} from "lit-html"
import { ButtonIconOnly } from "../Elements/Button";
import Logo from "./../Elements/Logo"
import ContactFooter from "./../Elements/ContactFooter"
import footerMenu from "./../../../json/footermenu"

const Footer = html`
  <footer id="footer" class="bg-neutral-light">
    <div class="section__container container pt-5 pb-2">
      <div class="section__content">
        <div class="flex-wrap space-between align-items-center">
          <div class="footer__logo">
            ${Logo}
          </div>
          <div class="social flex-wrap align-items-center">
            <h6 class="h4 mb-1 mr-2">Social Links</h6>
            <nav>
              ${[1,2,3].map(el=>ButtonIconOnly({theme:"muted"}))}
            </nav>
          </div>  
        </div>      
        <div class="grid-md-4">
          <div>
            <h6 class="h4 mb-1">Contact</h6>
            ${ContactFooter}
          </div>         
${footerMenu.map(o=>html`<div><h6 class="h4 mb-1">${o.heading}</h6><nav>${o.children.map(o2 => html`<a href="${o2.value}" class="w-100 mb-2">${o2.label}</a>`)}</nav></div>`)}
        </div>  
      </div>
    </div>   
    <div class="section__container container bg-neutral-light border-top py-1">
      <div class="section__content">
        <div class="py-1">&copy;2020 Eloyin</div>        
      </div>
    </div> 
  </footer>
`;

export default Footer;