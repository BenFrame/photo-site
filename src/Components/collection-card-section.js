import CollectionCard from './collection-card'
import { useState, useEffect, useCallback } from "react"

const CollectionGroup = ( props ) => {
    const [ selectedItem, setSelectedItem ] = useState();

    const windowClick = useCallback( () => {
        setSelectedItem( null );
    }, [ setSelectedItem ] );

    useEffect( () => {
        window.addEventListener( 'click', windowClick );
        return () => window.removeEventListener( 'click', windowClick );
    }, [ windowClick ]);

    return (<section className='Card-section'>
    {
      props.data.map( dataItem => (
        <CollectionCard 
          {...dataItem } // equivalent to saying url={ image.url } title={ image.title } etc... this just works since bredliImageData has keys the exact same names as the components expected props.
            setSelected={setSelectedItem}
            selectedItem={selectedItem}
            key={dataItem.url}
        />
      ))
    }
  </section>)
}


export default CollectionGroup;