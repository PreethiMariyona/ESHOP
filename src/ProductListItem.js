import React from "react";

function ProductListItem(props) {
  return (
    <div>
      <div className=" m-2 d-flex align-items-center justify-content-center">
      
          <img
            src={props.thumbnail}
            height={350}
            width={400}
            alt={props.title}
            className="border-radius-9 me-4"
          />
      
       
          <h5 className="card-title me-4">{props.title}</h5>
          <h6 className="mt-2 me-4">Price : {`$${props.price}`}</h6>
          <h6 className="mt-2 me-4">Discount : {props.discountPercentage}%</h6>
          <h6>Rating : {props.rating}</h6>
         
        
            <button className="btn btn-danger ms-3 " onClick={props.incrementItem}>+</button>
         <span className="ms-3">Quantity{props.count}</span>
            <button className="btn btn-danger ms-3"  onClick={props.decrementItem}>-</button>
            <button className="btn btn-danger ms-3"  onClick={props.removeItem}>Remove</button>
       
       
      </div>
    </div>
  );
}

export default ProductListItem;
