import React from "react"

function CollectionCard(props) {
  
    return (
        <div>
            <img src={ props.url } alt={ props.title }/>
            <div >
                <h2> { props.title } </h2>
                <p> { props.description } </p> 
            </div>
        </div>
   
    )
  }
  
  export default CollectionCard