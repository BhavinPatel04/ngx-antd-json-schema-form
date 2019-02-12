import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-button",
  templateUrl: "./form-button.component.html",
  styleUrls: ["form-button.component.scss"]
})
export class FormButtonComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;
}
