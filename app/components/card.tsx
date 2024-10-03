import React from 'react'

interface props{
    title ? : string
    description ?: string
}

function Card(props : props) {
  return (
    <>
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description ? props.description : 'lorem ipsum'}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card