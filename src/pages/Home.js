import React from 'react'
import { HomeBanner } from '../components/homepage/HomeBanner';
import { HomeCategories } from '../components/homepage/HomeCategories';
import { HomeCarousel } from '../components/homepage/homeCarousel/HomeCarousel';
import { HomeCarouselCard } from '../components/homepage/homeCarousel/HomeCarouselCard';

export const Home = () => {
  return (
    <div>
       <HomeBanner/>
       <HomeCategories/>
       <HomeCarousel/>
    </div>
  )
}
