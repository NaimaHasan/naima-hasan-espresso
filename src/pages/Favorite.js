import React from 'react'
import { TopBar } from '../components/common/TopBar'
import { ItemCard } from '../components/common/ItemCard'

export const Favorite = () => {
  return (
    <div style={{backgroundColor: " #e0d9c7",  minHeight: "200vh"}}>
      <TopBar/>
      <ItemCard/>
    </div>
  )
}
