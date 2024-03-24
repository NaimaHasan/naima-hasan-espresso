import React from 'react'
import { RecipeBanner } from '../components/recipe/RecipeBanner'
import { RecipeSteps } from '../components/recipe/RecipeSteps'
import { TopBar } from '../components/common/TopBar'

export const Recipe = () => {
  return (
    <div style={{backgroundColor: " #e0d9c7",  minHeight: "200vh"}}>
      <TopBar/>
      <RecipeBanner/>
      <RecipeSteps/>
    </div>
  )
}
