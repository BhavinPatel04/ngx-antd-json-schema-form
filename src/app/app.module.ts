import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

// import { NgxAntdJsonSchemaFormModule } from "ngx-antd-json-schema-form";
import { NgxAntdJsonSchemaFormModule } from "../../projects/ngx-antd-json-schema-form/src/lib/ngx-antd-json-schema-form.module";

import { AppInitService } from "src/common/services/app.init.service";
import { InjectorService } from "src/common/services/injector.service";
import { SharedService } from "src/common/services/shared.service";

import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxAntdJsonSchemaFormModule,
    NgZorroAntdModule
  ],
  providers: [AppInitService, SharedService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorService.injector = this.injector;
  }
}
