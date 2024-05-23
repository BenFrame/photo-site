import React from "react"
import { Link } from "react-router-dom"

function SpeciesCard(props) {
    return <Link class="Species-card" to={props.linkPath}>
    <img src={ props.img } alt='img'/>
    <div >
      <h2> { props.commonName } </h2>
      <p> { props.scientificName } </p>
    </div>
  </Link>
}

export default SpeciesCard