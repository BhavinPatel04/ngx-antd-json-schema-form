import { FormOption } from "./formOption.interface";
import { FormCommonSettings } from "./settings.interface";
import { FormIcon } from "./formIcon.interface";

export interface FormItem extends FormCommonSettings {
  key: string;
  label: string;
  type: string;
  placeholder?: string;
  hidden?: boolean;
  options?: FormOption[];
  disabled?: boolean;
  readonly?: boolean;
  value?: any;
  required?: boolean;
  language?: string;
  icon?: FormIcon;
}

export interface FormSubmitButton extends FormCommonSettings {
  show?: boolean;
  label?: string;
  disabled?: boolean;
}
