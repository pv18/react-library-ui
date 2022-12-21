import React from "react";
import { newGuid } from "utils/guid";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/pdf.svg";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Close } from "ui-kit/assets/icons/Close.svg";
import { ReactComponent as Checkbox } from "ui-kit/assets/icons/Checkbox.svg";

export type IconType = "Pdf" | "ArrowDown" | "Close" | "Checkbox";

export const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Close", <Close key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Checkbox", <Checkbox key={newGuid()} />],
]);
