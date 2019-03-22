import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "json-schema-form-icon",
  templateUrl: "./form-icon.component.html",
  styleUrls: ["./form-icon.component.scss"]
})
export class FormIconComponent implements Field {
  group: FormGroup;
  config: FormItem;
  settings: FormSettings;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeStyle(style) {
    if (style) {
      return this.sanitizer.bypassSecurityTrustStyle(style);
    }
  }
}
