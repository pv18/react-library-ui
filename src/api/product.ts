import axios from "axios";
import { ISelectOption } from "../ui-kit/Select";
import { MultiValue, SingleValue } from "react-select";

export const fetchProducts = async (
  selectOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>
) => {
  if (selectOption && "value" in selectOption) {
    const response = await axios.get(
      `https://fakestoreapi.com/products?sort=${selectOption.value}`
    );
    return response.data;
  }
};
