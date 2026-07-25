import ProductDetailsPage from '@/components/product/ProductDetailsPage';
import React from 'react'

export const ProductsDetailsPage =async ({params}) => {
    const {id}=await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`)
    const data =await res.json()
    console.log(data)
  return (
   <ProductDetailsPage data={data}></ProductDetailsPage>
)}
export default ProductsDetailsPage