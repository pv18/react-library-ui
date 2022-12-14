import React, { useCallback, useEffect, useState } from "react";
import "./SelectPage.scss";
import { Select } from "ui-kit";
import classNames from "classnames";
import { ISelectOption } from "ui-kit/Select";
import { MultiValue, SingleValue } from "react-select";
import { IProduct } from "types/product";
import * as productsApi from "api/product";
import { ProductsList } from "components";
import { isNull } from "lodash";

type isMulti = false;

export const SelectPage: React.FC = () => {
  const PRICE_UP = "по возрастанию id";
  const PRICE_DOWN = "по убыванию id";
  const options = [
    { value: "desc", label: PRICE_UP },
    { value: "asc", label: PRICE_DOWN },
  ];
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<ISelectOption> | MultiValue<ISelectOption>
  >({
    value: "desc",
    label: PRICE_UP,
  });
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [needRequestIndicator, setNeedRequestIndicator] = useState(0);
  const requestProducts = useCallback(() => {
    setNeedRequestIndicator(needRequestIndicator + 1);
  }, [setNeedRequestIndicator, needRequestIndicator]);

  const fetchProductsBySorting = useCallback(
    (
      selectedOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>
    ) => {
      productsApi
        .fetchProducts(selectedOption)
        .then(res => {
          setProducts(res);
          setIsSelectOpened(false);
        })
        .catch(error => {
          setIsSelectOpened(false);
        });
    },
    []
  );

  useEffect(() => {
    fetchProductsBySorting(selectedOption);
  }, [needRequestIndicator]);

  const handleChange = (
    selectedOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>
  ) => {
    if (isNull(selectedOption)) return;
    setSelectedOption(selectedOption);
    requestProducts();
  };

  const handlerBlur = () => {
    setIsSelectOpened(false);
  };

  const handlerFocus = () => {
    setIsSelectOpened(true);
  };

  return (
    <div className="SelectPage">
      <h2>Select</h2>
      <Select
        className={classNames("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        options={options}
        value={selectedOption}
        onBlur={handlerBlur}
        onFocus={handlerFocus}
        onChange={handleChange}
      />
      <ProductsList products={products} />
    </div>
  );
};
