import { components, GroupBase, StylesConfig } from "react-select";
import cn from "classnames";
import { Icon } from "ui-kit";
import { ISelectOption, isMultiType } from "ui-kit/Select";

export const SelectStyles: StylesConfig<
  ISelectOption,
  isMultiType,
  GroupBase<ISelectOption>
> = {
  control: styles => ({
    ...styles,
    border: "1px solid #B0976A",
    cursor: "pointer",
  }),
  option: (
    styles,
    { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
  ) => ({
    ...styles,
    backgroundColor: isSelected ? "#dfd3c3" : "",
    color: isFocused || isSelected ? "black" : "",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#dfd3c3",
    },
    ":hover": {
      backgroundColor: "#e4e4e4",
      transition: "all 0.15s",
    },
  }),
  multiValue: styles => {
    return {
      ...styles,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#e4e4e4",
      padding: "4px 8px",
    };
  },
  multiValueLabel: styles => ({
    ...styles,
    color: "black",
    fontSize: "16px",
    lineHeight: "20px",
    marginRight: "8px",
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: "#828c9c",
    cursor: "pointer",
    transition: "all 0.15s",
    ":hover": {
      color: "black",
    },
  }),
};
