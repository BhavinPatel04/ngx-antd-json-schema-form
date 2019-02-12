import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { APP_CONSTANTS } from "./home.constants";
import { FormSettings } from "ngx-antd-json-schema-form";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  sampleSchema: Object = APP_CONSTANTS.SAMPLE_SCHEMA;
  schema: Object = {};
  settings: FormSettings = {
    fieldClass: "field-class"
  };

  constructor() {}

  ngOnInit() {
    this.schema = this.sampleSchema;
  }

  submit(event) {}
}
