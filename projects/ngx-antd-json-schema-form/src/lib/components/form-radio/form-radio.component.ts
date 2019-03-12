import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-radio",
  templateUrl: "./form-radio.component.html",
  styleUrls: ["./form-radio.component.scss"]
})
export class FormRadioComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;
}
