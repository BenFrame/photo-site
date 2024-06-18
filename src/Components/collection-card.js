import React from "react"

const CollectionCard = (props) => {


    return (
        <div className="Collection-card">
                <div className="image-container">
                    <img src={ props.url } alt={ props.title } />
                </div>
            
            <div className="Card-Text">
                <h2> { props.title } </h2>
                <p> { props.producedBy } </p>
                <p> { props.description } </p> 
                
            </div>
        </div>
   
    )
  }
  
  export default CollectionCard