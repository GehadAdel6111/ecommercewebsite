import React from 'react'
import { NewCollection } from '../NewCollection/NewCollection'
import Offers from '../Offers/Offers'
import Popular from '../PopularInWomen/Popular'

export const Shop = () => {
  return (
    <div>
      <Offers />
      <Popular/>
      <NewCollection />
    </div>
  )
}
