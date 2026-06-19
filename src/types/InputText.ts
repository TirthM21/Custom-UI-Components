import { IInputField } from "./Input";

interface IMultilineInput {
  rows: number;
  rowsMax?: number;
}

export interface IInputText extends IInputField {
  /**
   * Setup for multiline input: { rows: number, rowsMax?: number }
   */
  multiline?: IMultilineInput;
  onChange?: (value: any) => void; // Relaxing the type definition
  value?: string;
}
