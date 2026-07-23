import TechnologyTemplate from '@/components/TechnologyTemplete';
import { technologiesData } from '@/data/technologies';
import React from 'react'
export const metadata = {
  title: "robotics - Ulterior Engineering",
};
export const Robotics = () => {
  const data = technologiesData['robotics']
  return (
   <TechnologyTemplate data={data}></TechnologyTemplate>
  )
}
export default Robotics;