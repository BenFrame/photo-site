import React from "react"

const CollectionCard = (props) => {

    return (
        <div className="Collection-card">
            <img src={ props.url } alt={ props.title }/>
            <div >
                <h2> { props.title } </h2>
                <p> { props.description } </p> 
                <p> { props.producedBy } </p>
            </div>
        </div>
   
    )
  }
  
  export default CollectionCard