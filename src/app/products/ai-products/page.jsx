import React from 'react'

export const AiProducts =async () => {
  const res= await fetch('http://localhost:5000/api/products/ai-products')
  const products = await res.json()



  return (
    
<div>

   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url('/assets/industrial-automation.png')",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-left">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">Ai Products</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-outline">For Get Buy</button>
    </div>
  </div>
</div>
</div>
    


  )
}
export default AiProducts;