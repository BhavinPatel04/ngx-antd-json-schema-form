import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppConfig } from "./app.config";
import { APP_CONSTANTS } from "./app.constants";
import { FormSettings } from "ngx-antd-json-schema-form";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Title]
})
export class AppComponent implements OnInit {
  title = "ngx-braebone-app";
  sampleSchema: Object = APP_CONSTANTS.SAMPLE_SCHEMA;
  schema: Object = {};
  settings: FormSettings = {
    fieldClass: "field-class"
  };

  public constructor(titleService: Title) {
    titleService.setTitle(AppConfig.title);
  }

  ngOnInit() {
    this.schema = this.sampleSchema;
  }
}
