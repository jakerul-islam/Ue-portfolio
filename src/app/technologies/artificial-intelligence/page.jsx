
import TechnologyTemplate from '@/components/TechnologyTemplete'
import { technologiesData } from '@/data/technologies'
import React from 'react'
export const metadata={
  title:'artificial-intelligence'
}
export const ArtificialIntelligence = () => {
  const data=technologiesData['artificial-intelligence']
  console.log(data)
  return (
   <TechnologyTemplate data={data}></TechnologyTemplate>
  )
}
export default ArtificialIntelligence;