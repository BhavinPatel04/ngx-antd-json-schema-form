import { Component, OnInit } from "@angular/core";
import { filter, map, mergeMap } from "rxjs/operators";
import { Router, ActivatedRoute, NavigationEnd, Event } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AppConfig } from "./app.config";
import { SharedService } from "../common/services/shared.service";
import { APP_CONSTANTS } from './app.constants';
import { FormSettings } from 'ngx-antd-json-schema-form';

declare var require: any;
const _ = require("lodash");
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Title, SharedService]
})
export class AppComponent implements OnInit {
  title = "ngx-braebone-app";
  sampleSchema: Object = APP_CONSTANTS.SAMPLE_SCHEMA;
  schema: Object = {};
  settings: FormSettings = {
    fieldClass: "field-class"
  };

  public constructor(
    titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public ss: SharedService
  ) {
    titleService.setTitle(AppConfig.title);
  }

  ngOnInit() {
    this.schema = this.sampleSchema;
    
    // get current router and set to shared service
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        map(() => {
          return this.activatedRoute;
        }),
        map((route: any) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === "primary"),
        mergeMap((route) => _.merge(route.data, route.params))
      )
      .subscribe((d) => {
        this.ss.currentRouteParams = d;
      });
  }
}
