import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormItem, FormSettings, FormSubmitButton, FormCommonSettings } from "./models/index";

// ['', [ Validators.pattern(/^[0-9 ]{1,15}$/)]]
@Component({
  selector: "ngx-antd-json-schema-form",
  templateUrl: "./ngx-antd-json-schema-form.component.html",
  styleUrls: ["./ngx-antd-json-schema-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NgxAntdJsonSchemaFormComponent implements OnChanges {
  @Input() schema: FormItem[] = [];
  @Input() settings: FormSettings;

  @Output() registeredForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() formChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() formTouch: EventEmitter<any> = new EventEmitter<any>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() formValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup;
  submitButtonConfig: FormItem;
  formSettings: FormSettings = this.getDefaultSettings();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["schema"]) {
      this.schema = changes["schema"]["currentValue"];
      this.registerForm();
    }
    if (changes["settings"]) {
      this.settings = changes["settings"]["currentValue"];
      this.formSettings = this.mergeFormSettings(this.formSettings, this.settings);
      this.submitButtonConfig = this.getSubmitButtonConfig(this.formSettings.submitButton);
    }
  }

  registerForm() {
    this.form = this.createGroup(this.schema);
    this.registeredForm.emit(this.form);
    this.handleEmitters();
    this.onFormUpdate();
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.form.getRawValue());
  }

  onFormUpdate(): void {
    this.form.valueChanges.subscribe((val) => {
      this.schema.forEach((item: FormItem) => {
        if (val[item.key] !== undefined) {
          item.value = val[item.key];
        }
      });
      this.handleEmitters();
    });
  }

  createGroup(schema): FormGroup {
    const group: any = {};

    if (schema) {
      schema.forEach((item: FormItem) => {
        const value = item.value !== undefined ? item.value : "";
        const formState = { value, disabled: item.disabled || false };
        group[item.key] = item.required ? new FormControl(formState, Validators.required) : new FormControl(formState);
      });
    }

    return new FormGroup(group);
  }

  handleEmitters() {
    const isFormValid: boolean = this.form.valid;
    this.submitButtonConfig = this.getSubmitButtonConfig({ disabled: !isFormValid });
    this.formValid.emit(isFormValid);
    if (this.form.dirty) {
      this.formChange.emit({ raw: this.form.getRawValue(), schema: this.schema });
      this.formTouch.emit(this.form.dirty);
    }
  }

  getDefaultSettings(): FormSettings {
    const formCommonSettings: FormCommonSettings = {
      nzGutter: 8,
      itemClass: "",
      nzSpanLabel: 8,
      labelClass: "",
      nzSpanControl: 16,
      fieldClass: ""
    };
    const defaultSettings = {
      ...formCommonSettings,
      submitButton: {
        show: true,
        label: "Submit",
        disabled: false
      } as FormSubmitButton
    } as FormSettings;

    return JSON.parse(JSON.stringify(defaultSettings));
  }

  getSubmitButtonConfig(newConfig: FormSubmitButton = {}): FormItem {
    const defaultConfig = Object.assign(
      {
        key: "submit",
        type: "button",
        ...this.formSettings.submitButton
      } as FormItem,
      newConfig
    );
    this.formSettings.submitButton = defaultConfig;
    return JSON.parse(JSON.stringify(defaultConfig));
  }

  mergeFormSettings(dest: FormSettings, source: FormSettings) {
    const newSubmitButtonConfig = source.submitButton || {};
    const submitButtonConfig = Object.assign(dest.submitButton, newSubmitButtonConfig);
    const settings: FormSettings = Object.assign(dest, source);
    settings.submitButton = submitButtonConfig;
    return settings;
  }
}
