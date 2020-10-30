import {html} from "lit-html"

const Heading = ({tag = "h1", value="This is a placeholder title", style, classValue=""}) => {
  style = style !== undefined ? style : tag;
  let node = document.createElement(tag);
  node.classList.add(style);
  classValue.split(" ").filter(v=>v!=="").forEach(el=>node.classList.add(el));
  node.innerHTML = value;  
  return  html`${node}`}
export default Heading;