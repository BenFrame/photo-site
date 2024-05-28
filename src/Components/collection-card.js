import React from "react"

function CollectionCard(props) {
  
    return (
        <div className="Collection-card">
            <img src={ props.url } alt={ props.title }/>
            <div >
                <h2> { props.title } </h2>
                <p> { props.description } </p> 
                <p> { props.dob } </p>
            </div>
        </div>
   
    )
  }
  
  export default CollectionCard