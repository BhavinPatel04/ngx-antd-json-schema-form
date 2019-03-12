import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormItem, Field, FormSettings } from "../../models";

@Component({
  selector: "json-schema-form-button",
  templateUrl: "./form-button.component.html",
  styleUrls: ["form-button.component.scss"]
})
export class FormButtonComponent implements Field, OnChanges {
  @Input() group: FormGroup;
  @Input() config: FormItem;
  @Input() settings: FormSettings;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["group"]) {
      this.group = changes["group"]["currentValue"];
    }
    if (changes["config"]) {
      this.config = changes["config"]["currentValue"];
    }
    if (changes["settings"]) {
      this.settings = changes["settings"]["currentValue"];
    }
  }
}
