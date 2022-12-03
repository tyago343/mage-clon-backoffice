import Spinner from "@Components/atoms/Spinner";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProductsRequest } from "src/services/actions/products.action";
import { RootState } from "src/services/reducers";
const Products = () => {
  const dispatch = useDispatch();
  const { list: productList, pending } = useSelector(
    (globalState: RootState) => globalState.product
  );
  useEffect(() => {
    if (!productList) dispatch(fetchProductsRequest());
    return () => {};
  }, [productList.length]);

  return (
    <>
      <Spinner active={pending} />
    </>
  );
};
export default Products;
