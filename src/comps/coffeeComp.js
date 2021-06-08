import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)

    console.log(products)
    

  const renderList = products.map((product) => {
      const { id, title, desc, price } = product;
      
      
    return (
      <div className="" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header"> {title} </div>
                <div className="meta price"> $ {price} </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });


    return (
        <div>{renderList} </div>
    )
}

export default ProductComponent;