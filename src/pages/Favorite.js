import React from 'react'
import { TopBar } from '../components/common/TopBar'
import { ItemCard } from '../components/common/ItemCard'
import { FilterBar } from '../components/common/FilterBar';
import { Item } from '../components/common/Item';

export const Favorite = ({filter, setFilter, recipes}) => {
  return (
    <div style={{backgroundColor: " #e0d9c7",  minHeight: "200vh"}}>
      <TopBar transparent={false}/>
      <FilterBar filter={filter} setFilter={setFilter}/>
      <Item recipes={recipes}/>
    </div>
  )
}
