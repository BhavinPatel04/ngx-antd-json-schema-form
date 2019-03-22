import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppConfig } from "./app.config";
import { APP_CONSTANTS } from "./app.constants";
import { FormSettings } from "../../projects/ngx-antd-json-schema-form/src/lib/models";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Title],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = "ngx-braebone-app";
  sampleSchema: Object = APP_CONSTANTS.SAMPLE_SCHEMA;
  schema: Object = {};
  settings: FormSettings = {
    nzSpanLabel: 4,
    nzSpanControl: 20,
    fieldClass: "field-class"
  };
  form: FormGroup;
  isFormValid = true;
  formData = "";
  newFormData = "";
  formTouched = false;

  public constructor(titleService: Title) {
    titleService.setTitle(AppConfig.title);
  }

  ngOnInit() {
    this.schema = this.sampleSchema;
  }

  onFormChange(event) {
    this.newFormData = JSON.stringify(event, null, 2);
  }

  submit(event) {
    this.formData = JSON.stringify(event, null, 2);
  }
  changeSettings() {
    this.settings = {
      nzSpanLabel: 8,
      nzSpanControl: 16,
      fieldClass: "field-class",
      submitButton: {
        nzSpanLabel: 6,
        nzSpanControl: 18
      }
    };
  }
}
