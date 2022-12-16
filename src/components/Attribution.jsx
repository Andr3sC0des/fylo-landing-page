import React from "react"
import "../attribution.css"

class Attribution extends React.Component {
    render(){
        return(
            <>
  <label htmlFor="flag">
    <div className="flag__button">
      <span>
        <i className="fa-brands fa-creative-commons-by" />
      </span>
    </div>
    <input type="checkbox" className="flag__check" id="flag"/>
    <div className="flag">
      <div className="flag__attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        <br />
        Coded by{" "}
        <a href="https://andr3sc0des.github.io" target="_blank">
          Andr3sC0des
        </a>
        .
      </div>
    </div>
  </label>
</>

        );
    }
}

export default Attribution