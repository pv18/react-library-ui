import React from "react";
import { IProduct } from "types/product";
import { Product } from "../Product/Product";
import { isNil } from "lodash";
import "./ProductsList.scss";

export interface IProductsListProps {
  products: IProduct[];
}

export const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  return (
    <div className="ProductsList">
      {!isNil(products) &&
        products.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
};
