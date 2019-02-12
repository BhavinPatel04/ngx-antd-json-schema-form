import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-checkbox",
  templateUrl: "./form-checkbox.component.html",
  styleUrls: ["./form-checkbox.component.scss"]
})
export class FormCheckboxComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;
}
