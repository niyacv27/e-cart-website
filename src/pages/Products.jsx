import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { Card, Button } from "flowbite-react";

function Products() {
  const { loading, allProducts, error } = useSelector(
    (state) => state.productReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((item) => (
          <Card
            key={item.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md
                       hover:shadow-xl transition duration-300">
            <div className="w-full h-80 flex items-center justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 text-center min-h-[56px] flex items-center justify-center">
              {item.title}
            </h2>

            <div className="flex justify-center">
              <Link to={`/products/${item.id}`}>
                <Button className="bg-purple-700 hover:bg-purple-800">
                  View More
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
