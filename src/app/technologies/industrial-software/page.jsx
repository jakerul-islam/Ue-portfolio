import TechnologyTemplate from "@/components/TechnologyTemplete";
import { technologiesData } from "@/data/technologies";
import React from "react";
export const metadata = {
  title: "Industrial Software - Ulterior Engineering",
};
export const IndustrialSoftware = () => {
  const data = technologiesData['industrial-software']
  return(
    <TechnologyTemplate data={data}></TechnologyTemplate>
  )
};
export default IndustrialSoftware;
