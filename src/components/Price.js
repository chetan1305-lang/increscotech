import React from 'react'

const Price = () => {
  return (
    <React.Fragment>
        <h6 className="text-left text-info">Price</h6>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="price"  />
            <label className="form-check-label" htmlFor="price">Rs.99 to Rs. 36440</label>
        </div>
    </React.Fragment>     
  )
}

export default Price