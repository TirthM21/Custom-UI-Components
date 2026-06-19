import { string } from "zod";
import { IAdornment, IAdornmentSubpart } from "./Adornment";
import { IClickable } from "./Base";
import { IIcon, IIconUtilizer } from "./Icon";
import { IDisablableInput } from "./Input";

export type IIconButtonSubpart = IAdornmentSubpart | "icon";

export interface IBaseIconButton extends IAdornment, IClickable, IIconUtilizer {}
export interface IIconButton
  extends IBaseIconButton,
    IDisablableInput,
    Pick<IIcon, "rotate" | "size"> {
  position?: string;
  variant?: string;
}
