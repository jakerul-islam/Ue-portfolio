import React from 'react'

export const  IndustryCard = ({industry}) => {
  return (
   <div className="card bg-base-100  shadow-sm">
  <figure className="">
    <img
      src={industry.image}
      alt="industry.title"
      className="rounded-none" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}
export default  IndustryCard