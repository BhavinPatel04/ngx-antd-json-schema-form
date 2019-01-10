import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppInitService } from "src/common/services/app.init.service";
import { InjectorService } from "src/common/services/injector.service";
import { SharedService } from "src/common/services/shared.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppInitService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorService.injector = this.injector;
  }
}
