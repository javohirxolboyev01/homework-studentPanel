import React, { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    document.title = "Products | Student Panel";
  }, []);
  return <div>Product</div>;
};

export default React.memo(Product);
