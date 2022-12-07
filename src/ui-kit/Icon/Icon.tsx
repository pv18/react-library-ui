import React, { DOMAttributes } from "react";
import classNames from "classnames";
import { newGuid } from "utils/guid";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/pdf.svg";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";

export type IconType = "Pdf" | "ArrowDown";

const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
]);

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
  iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <div className={classNames("Icon", className)} {...rest}>
      {getIcon(type)}
    </div>
  );
};
