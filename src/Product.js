import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/reducer/cart";

function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const list = useSelector((state) => state.cart.list);

  const element = list.find((item) => item.id === props.id);

  const addToCart = () => {
    dispatch(addItem(props));
  };

  return (
    <div>
      <div className="card m-2">
        <div className="mt-2">
          <img
            src={props.thumbnail}
            height={350}
            width={400}
            alt={props.title}
            className="border-radius-9"
          />
        </div>
        <div className="mt-3 card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="mt-2">Price : {`$${props.price}`}</h6>
          <h6 className="mt-2">Discount : {props.discountPercentage}%</h6>
          <h6>Rating : {props.rating}</h6>
          <div className="mt-4">
            {props.stock > 0 ? (
              <>
                <button className="btn btn-success">Buy Now</button>
                {element?.count > 0 ?  <button className="ms-3 btn btn-warning" onClick={()=> navigate('/cart')}>
                  Go to Cart
                </button>:
                <button className="ms-3 btn btn-outline-success" onClick={addToCart}>
                  Add to Cart
                </button>}
              </>
            ) : (
              <button className="btn btn-outline-danger">Out of Stock</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
