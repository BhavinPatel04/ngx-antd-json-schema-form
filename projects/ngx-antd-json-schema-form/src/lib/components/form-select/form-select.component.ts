import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-select",
  styleUrls: ["./form-select.component.scss"],
  templateUrl: `./form-select.component.html`
})
export class FormSelectComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;
}
