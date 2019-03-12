import { FormSubmitButton } from "./formItem.interface";

export interface FormCommonSettings {
  class?: string;
  nzGutter?: number;
  itemClass?: string;
  nzSpanLabel?: number;
  labelClass?: string;
  nzSpanControl?: number;
  fieldClass?: string;
}

export interface FormSettings extends FormCommonSettings {
  submitButton?: FormSubmitButton;
}
