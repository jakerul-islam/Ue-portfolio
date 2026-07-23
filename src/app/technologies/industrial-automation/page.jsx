import TechnologyTemplate from '@/components/TechnologyTemplete';
import { technologiesData } from '@/data/technologies';
import React from 'react'
 export const metadata = {
  title: "Industrial Automation - Ulterior Engineering",
};
export const IndustrialAutomation = () => {
 
  const data = technologiesData["industrial-automation"];
  return <TechnologyTemplate data={data}></TechnologyTemplate>
}
export default IndustrialAutomation