import React from 'react'
import { TopBar } from '../components/common/TopBar'
import { ItemCard } from '../components/common/ItemCard'
import { FilterBar } from '../components/common/FilterBar';

export const Favorite = ({filter, setFilter}) => {
  const notes =[1,1,1,1,1,1,1,1];
  return (
    <div style={{backgroundColor: " #e0d9c7",  minHeight: "200vh"}}>
      <TopBar/>
      <FilterBar filter={filter} setFilter={setFilter}/>
      <div>
      {notes.length === 0 ? (
        <div
          style={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <p>There is no note to display!</p>
        </div>
      ) : (
        <div className="row" style={{padding: "0px 200px", marginTop: "40px"}}>
          {notes.map((note, index) => (
            <div key={index} className="col mb-4 d-flex justify-content-center" >
              <ItemCard/>
            </div>
          ))}

          <div className={`col-${12 - (notes.length % 4) * 3} mb-4`} />
        </div>
      )}
    </div>
    </div>
  )
}
