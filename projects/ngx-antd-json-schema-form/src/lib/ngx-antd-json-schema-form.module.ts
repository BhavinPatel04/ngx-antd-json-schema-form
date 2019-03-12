import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);

import { NgxAntdJsonSchemaFormComponent } from "./ngx-antd-json-schema-form.component";
import { DynamicFieldDirective } from "./directives/dynamicField";
import { FormButtonComponent } from "./components/form-button/form-button.component";
import { FormInputComponent } from "./components/form-input/form-input.component";
import { FormSelectComponent } from "./components/form-select/form-select.component";
import { FormCheckboxComponent } from "./components/form-checkbox/form-checkbox.component";
import { FormRadioComponent } from "./components/form-radio/form-radio.component";
import { FormTextareaComponent } from "./components/form-textarea/form-textarea.component";
import { PrismComponent } from "./components/form-prism/form-prism.component";

const childComponents = [
  FormButtonComponent,
  FormInputComponent,
  FormSelectComponent,
  FormCheckboxComponent,
  FormRadioComponent,
  FormTextareaComponent,
  PrismComponent
];

@NgModule({
  declarations: [NgxAntdJsonSchemaFormComponent, DynamicFieldDirective, ...childComponents],
  imports: [BrowserModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  entryComponents: childComponents,
  exports: [NgxAntdJsonSchemaFormComponent]
})
export class NgxAntdJsonSchemaFormModule {}
