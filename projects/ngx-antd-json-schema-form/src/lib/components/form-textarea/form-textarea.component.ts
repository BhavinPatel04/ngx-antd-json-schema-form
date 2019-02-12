import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-textarea",
  templateUrl: "./form-textarea.component.html",
  styleUrls: ["./form-textarea.component.scss"]
})
export class FormTextareaComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;
}
