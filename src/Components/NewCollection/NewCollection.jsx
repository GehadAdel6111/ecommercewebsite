import React from 'react'
import { Items } from '../Items/Items'
import new_collections from '../new_collections'
import './NewCollection.css'

export const NewCollection = () => {
  return (
    <div className="newCollection">
        <h1>New Collection</h1>
        <hr/>
        <div className="collection">
            {new_collections.map((item,i) => {
                return (
                    <Items key={i} id={item.id}
                    name={item.name} image={item.image}
                    new_price={item.new_price} old_price={item.old_price}/>
                )
            })}
        </div>
    </div>
  )
}