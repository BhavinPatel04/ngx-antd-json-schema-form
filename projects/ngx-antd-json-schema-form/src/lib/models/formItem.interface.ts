import { FormSelectOption } from "./formSelectOption.interface";

export interface FormItem {
  key: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: FormSelectOption[];
  disabled?: boolean;
  readonly?: boolean;
  value?: any;
  class?: string;
  required?: boolean;
  language?: string;
  nzGutter?: number;
  itemClass?: string;
  nzSpanLabel?: number;
  labelClass?: string;
  nzSpanControl?: number;
  fieldClass?: string;
}
