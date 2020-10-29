import {html, render} from "lit-html"
import Header from "./Generator/Modules/Header"
import Footer from "./Generator/Modules/Footer"

let Content = html`<div class="page"></div>`


let App = () => html`
  ${Header}
  ${Content}
  ${Footer}
`

render(App(),document.body)

