import TechnologyTemplate from '@/components/TechnologyTemplete'
import { technologiesData } from '@/data/technologies'
import React from 'react'
export const metadata = {
  title:'embeded-system'
}

export const EmbeddedSystem = () => {
  const data=technologiesData['embedded-systems-electronics']
  
   return (
    <TechnologyTemplate data={data}></TechnologyTemplate>
   )
}
export default EmbeddedSystem;