import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnInit
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormItem, FormSettings, FormSubmitButton, FormCommonSettings } from "./models/index";

@Component({
  selector: "ngx-antd-json-schema-form",
  templateUrl: "./ngx-antd-json-schema-form.component.html",
  styleUrls: ["./ngx-antd-json-schema-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NgxAntdJsonSchemaFormComponent implements OnInit, OnChanges {
  @Input() schema: any = [];
  @Input() settings: FormSettings = this.getDefaultSettings();

  @Output()
  schemaChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  submitButtonConfig: FormItem;

  constructor() {}

  ngOnInit(): void {
    this.submitButtonConfig = this.getSubmitButtonConfig();
    if (!this.form) {
      this.form = this.createGroup(this.schema);
      this.onFormChange();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["schema"]) {
      this.schema = changes["schema"]["currentValue"];
      this.form = this.createGroup(this.schema);
      this.onFormChange();
    }
    if (changes["settings"]) {
      const newSettings = changes["settings"]["currentValue"];
      const defaultSettings = this.getDefaultSettings();
      this.settings = Object.assign(defaultSettings, newSettings);
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.form.getRawValue());
  }

  onFormChange(): void {
    this.form.valueChanges.subscribe((val) => {
      let isFormValid = true;
      this.schema.forEach((item: FormItem) => {
        if (val[item.key] !== undefined) {
          item.value = val[item.key];
        }
        if (item.required && !this.isValueValid(item.value)) {
          isFormValid = false;
        }
      });
      this.submitButtonConfig = this.getSubmitButtonConfig({ disabled: !isFormValid });
      this.schemaChange.emit(this.schema);
    });
  }

  createGroup(schema): FormGroup {
    const group: any = {};

    if (schema) {
      let isFormValid = true;
      schema.forEach((item: FormItem) => {
        if (item.required && !this.isValueValid(item.value)) {
          isFormValid = false;
        }
        const value = item.value !== undefined ? item.value : "";
        const formState = { value, disabled: item.disabled || false };
        group[item.key] = item.required ? new FormControl(formState, Validators.required) : new FormControl(formState);
      });
      this.submitButtonConfig = this.getSubmitButtonConfig({ disabled: !isFormValid });
    }

    return new FormGroup(group);
  }

  isValueValid(value): boolean {
    let valid = true;
    valid = value !== undefined;
    if (typeof value === "string") {
      valid = !!value;
    }
    return valid;
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
    return JSON.parse(
      JSON.stringify({
        ...formCommonSettings,
        submitButton: {
          show: true,
          label: "Submit",
          disabled: false,
          ...formCommonSettings
        } as FormSubmitButton
      } as FormSettings)
    );
  }

  getSubmitButtonConfig(newConfig: FormSubmitButton = {}): FormItem {
    const defaultConfig = {
      key: "submit",
      type: "button",
      ...this.settings.submitButton,
      fieldClass: "submit-button-class"
    } as FormItem;
    return Object.assign(defaultConfig, newConfig);
  }
}
