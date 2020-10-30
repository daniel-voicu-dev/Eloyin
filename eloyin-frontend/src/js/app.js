import {html, render} from "lit-html"
import Header from "./Generator/Modules/Header"
import Footer from "./Generator/Modules/Footer"
import Heading from "./Generator/Elements/Heading"
import forrest from "../images/hero/forrest.jpg"

let Content = html`<div class="page">
  <section class="section__container container--narrow">    
    <div class="section__content">
      <article class="my-5">
        <img width="1920" height="1080" src=${forrest} />
        ${Heading({tag: "h1", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"})}
        ${Heading({tag: "h2", value: "Nam elit quam, sollicitudin id rhoncus molestie, ultricies sed ligula", classValue: "color-muted weight-normal"})}
        <p>Proin ac iaculis neque, id convallis ipsum. Maecenas non lacinia purus. Suspendisse ac feugiat massa. Fusce ultricies purus eu tortor scelerisque sollicitudin. Integer justo sapien, vestibulum at hendrerit in, dapibus a metus. Proin vehicula est est, eu pharetra est pulvinar nec. Duis nec nulla mi. In hac habitasse platea dictumst. Praesent ac libero eu nisi euismod efficitur. Ut tempor leo a eleifend faucibus. Mauris sed leo at nisi aliquet pulvinar.</p>
        <p>Mauris ac auctor nunc. Etiam cursus libero a lobortis posuere. Proin non venenatis purus. Aenean consequat tempus massa, et vulputate ipsum eleifend sed. Sed scelerisque egestas semper. Integer ut mi enim. Aenean id elit nisl. Nulla in metus luctus nisl egestas ornare id eget risus. Phasellus in euismod ante. Etiam molestie euismod urna ac semper. Sed lobortis dictum pulvinar. Duis semper egestas est in aliquam. Sed porttitor risus vitae rhoncus consequat. Donec faucibus mattis leo, at sagittis sapien pellentesque nec.</p>
      </article>
    </div>
  </section>
  
</div>`


let App = () => html`
  ${Header} 
  ${Content}
  ${Footer} 
`

render(App(),document.body)

