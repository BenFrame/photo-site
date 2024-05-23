import React from "react"

function SpeciesCard(props) {
    return <div class="Species-card">
    <img alt="snakes" >{ props.img } </img>
    <div >
      <h2> { props.commonName } </h2>
      <p> { props.scientificName } </p>
    </div>
  </div>
}

export default SpeciesCard()