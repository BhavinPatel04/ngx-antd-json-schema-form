import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.scss"]
})
export class FormInputComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;
}
