import React from 'react'
import { RecipeBanner } from '../components/recipe/RecipeBanner'
import { RecipeDetails } from '../components/recipe/RecipeDetails'
import { TopBar } from '../components/common/TopBar'

export const Recipe = () => {
  return (
    <div style={{backgroundColor: " #e0d9c7",  minHeight: "100vh"}}>
      <TopBar/>
      <RecipeBanner/>
      <RecipeDetails/>
    </div>
  )
}
