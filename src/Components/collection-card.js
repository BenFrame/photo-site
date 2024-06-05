import React from "react"

const CollectionCard = (props) => {


    return (
        <div className="Collection-card">
            <div className="Image-hover-trigger">
                <img src={ props.url } alt={ props.title } />
            </div>
            <div className="Card-Text">
                <h2> { props.title } </h2>
                <p> { props.description } </p> 
                <p> { props.producedBy } </p>
            </div>
        </div>
   
    )
  }
  
  export default CollectionCard