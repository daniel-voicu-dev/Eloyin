import {html, render} from "lit-html"
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import logoSVG from "./../../../images/logo.svg"

const Logo = html`
  <div id="logo" class="logo--main">
    ${unsafeHTML(logoSVG)}
  </div>
`

export default Logo
