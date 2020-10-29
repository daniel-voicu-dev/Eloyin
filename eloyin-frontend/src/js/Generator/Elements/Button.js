import {html} from "lit-html"
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import defaultIcon from "./../../../images/icons/default.svg";

const Button = ({theme="dark", style="fill", cssclass="", type="button", value="", params=[]}) => html`
  <button type=${type} class="btn-${style}--${theme} ${cssclass}">${value}</button>
`;

const ButtonIcon = ({theme="dark", style="fill", cssclass="", type="button", icon=`${defaultIcon}`,params=[]}) => html`
  <button type=${type} class="btn-${style}--${theme} btn-icon ${cssclass}"><span class="ico">${unsafeHTML(icon)}</span></button>
`;
const ButtonIconOnly = ({theme="dark",  cssclass="", type="button", icon=`${defaultIcon}`, params=[]}) => html`
  <button type=${type} class="btn-icon--${theme} btn-icon ${cssclass}"><span class="ico">${unsafeHTML(icon)}</span></button>
`;


export {Button, ButtonIcon, ButtonIconOnly};