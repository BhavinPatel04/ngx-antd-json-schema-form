import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field, FormSettings } from "../models";
import { FormButtonComponent } from "../components/form-button/form-button.component";
import { FormInputComponent } from "../components/form-input/form-input.component";
import { FormCheckboxComponent } from "../components/form-checkbox/form-checkbox.component";
import { FormSelectComponent } from "../components/form-select/form-select.component";
import { FormTextareaComponent } from "../components/form-textarea/form-textarea.component";
import { PrismComponent } from "../components/form-prism/form-prism.component";
import { FormRadioComponent } from "../components/form-radio/form-radio.component";

const components: { [type: string]: Type<Field> } = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  checkbox: FormCheckboxComponent,
  radio: FormRadioComponent,
  "radio-button": FormRadioComponent,
  textarea: FormTextareaComponent,
  prism: PrismComponent
};

@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input() group: FormGroup;
  @Input() config: any;
  @Input() settings: FormSettings;

  get isValid() {
    return this.group.controls[this.config.key].valid;
  }

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.group = this.group;
      this.component.instance.config = this.config;
      this.component.instance.settings = this.settings;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(", ");
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.group = this.group;
    this.component.instance.config = this.config;
    this.component.instance.settings = this.settings;
  }
}
