import { FormGroup } from "@angular/forms";
import { FormSettings } from "./settings.interface";

export interface Field {
  group: FormGroup;
  config: any;
  settings: FormSettings;
  class?: string;
}
