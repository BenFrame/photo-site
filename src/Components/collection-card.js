import React from "react"

const CollectionCard = (props) => {

    // We are using the url as the item key
    const isSelectedItem = props.selectedItem === props.url;

    const toggleSelected = ( ev ) => {
        ev.stopPropagation();
        // If we are the selected item, we unset it.
        if ( isSelectedItem ) {
            props.setSelected( null );
            return;
        }
        // Otherwise set as url.
        props.setSelected( props.url );
    }

    return (
        <div className={ isSelectedItem ? "Collection-card selected" : "Collection-card" }>
                <div className={"image-container"}>
                    <img src={ props.url } alt={ props.title } onClick={ toggleSelected } />
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