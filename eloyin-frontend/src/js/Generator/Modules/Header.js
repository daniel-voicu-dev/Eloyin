import {html} from "lit-html"
import Logo from "./../Elements/Logo"
import {ButtonIcon, ButtonIconOnly} from "./../Elements/Button"
import accountIcon from "./../../../images/icons/account.svg"
import cartIcon from "./../../../images/icons/cart.svg"
import searchIcon from "./../../../images/icons/search.svg"

let TopHeader = html`
  <div class="section__container container border-bottom">
    <div class="section__content">
      <div class="header--top flex-wrap space-between py-1 small font-condensed">
        <div class="quick-contact child-mr-2">
          <a href="tel:0">555-555555</a>
          <a href="mailto:test@test.com">Email us</a>
        </div>
        <nav class="child-ml-2">
          <a href="#">How can you help?</a>
          <a href="#">The Team</a>
          <a href="#">Join us</a>
        </nav> 
      </div>
    </div>
  </div>
`;

let HeaderActions = html`
  <nav class="flex-wrap align-items-center justify-content-end child-ml-2">
    ${ButtonIconOnly({icon:`${searchIcon}`})}
    ${ButtonIconOnly({icon:`${accountIcon}`})}
    ${ButtonIconOnly({icon:`${cartIcon}`})}
  </nav>
`;

let MiddleHeader = html`
  <div class="section__container container">
    <div class="section__content">
      <div class="grid-auto-1">
        ${Logo}
        ${HeaderActions}
      </div>     
    </div>
  </div>
`;

const BottomHeader = html`
  <div class="section__container container--wide bg-neutral-light">
    <div class="section__content">
      <nav id="navigation--main" class="w-100 flex-wrap justify-content-center child-mr-3 py-1 font-condensed text-uppercase">
          <a href="#" class="item h-100" menu-ref="#id1">Menu Link 1</a>
          <a href="#" class="item h-100" menu-ref="#id2">Menu Link 2</a>
          <a href="#" class="item h-100" menu-ref="#id3">Menu Link 3</a>
          <a href="#" class="item h-100" menu-ref="#id4">Menu Link 4</a>
          <a href="#" class="item h-100" menu-ref="#id5">Menu Link 5</a>
          <a href="#" class="item h-100" menu-ref="#id6">Menu Link 6</a>
      </nav>
    </div>
  </div>
`;

const Header = html`
 <header id="header">
   ${TopHeader}
   ${MiddleHeader}
   ${BottomHeader}
</header>
`

export default Header;
