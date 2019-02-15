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
import { FormItem, FormSettings } from "./models/index";

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

  constructor() {}

  ngOnInit() {
    this.form = this.createGroup(this.schema);
    this.onFormChange();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["schema"]) {
      this.schema = changes["schema"]["currentValue"];
      this.form = this.createGroup(this.schema);
      this.onFormChange();
    }
    if (changes["settings"]) {
      const newSettings = changes["settings"]["currentValue"];
      this.settings = Object.assign(this.settings, newSettings);
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.form.getRawValue());
  }

  onFormChange() {
    this.form.valueChanges.subscribe((val) => {
      this.schema.forEach((item: FormItem) => {
        if (val[item["key"]]) { item["value"] = val[item["key"]]; }
      });
      this.schemaChange.emit(this.schema);
    });
  }

  createGroup(schema) {
    const group: any = {};

    if (schema) {
      schema.forEach((item: FormItem) => {
        const formState = { value: item.value || "", disabled: item.disabled || false };
        group[item.key] = item.required ? new FormControl(formState, Validators.required) : new FormControl(formState);
      });
    }

    return new FormGroup(group);
  }

  getDefaultSettings(): FormSettings {
    return JSON.parse(
      JSON.stringify({
        nzGutter: 8,
        itemClass: "",
        nzSpanLabel: 8,
        labelClass: "",
        nzSpanControl: 16,
        fieldClass: ""
      })
    );
  }
}
