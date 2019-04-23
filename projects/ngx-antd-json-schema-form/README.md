# ngx-antd-json-schema-form

> JSON schema form with ant-design and prsimjs

[![Build Status](https://travis-ci.org/BhavinPatel04/ngx-antd-json-schema-form.svg?branch=master)](https://travis-ci.org/BhavinPatel04/ngx-antd-json-schema-form)
[![npm version](https://badge.fury.io/js/ngx-antd-json-schema-form.svg)](https://badge.fury.io/js/ngx-antd-json-schema-form)

This plugin uses ng-zorro-antd and prismjs

Demo: https://bhavinpatel04.github.io/ngx-antd-json-schema-form/

## Features

Emits the new updated schema when the form value changes

## Installation

Install the plugin from npm:

```
npm install ngx-antd-json-schema-form --save
```

import **NgxAntdJsonSchemaFormModule** in your module:

```typescript
...
import { FormsModule } from '@angular/forms';
import { NgxAntdJsonSchemaFormModule } from 'ngx-antd-json-schema-form';
import { AppComponent } from "./app.component";

@NgModule({
    imports:      [... , FormsModule, NgxAntdJsonSchemaFormModule],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
```

Add **Styles** in `angular.json`:

```
  ...
  "assets": [...],
  "styles": [
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css",
    "node_modules/prismjs/themes/prism.css",
    "src/styles.scss"
  ],
  ...
```

## Usage example

> The component using this library should have `encapsulation: ViewEncapsulation.None`

Html:

```html
<ngx-antd-json-schema-form [(schema)]="schema" [settings]="settings" (submit)="submit($event)">
</ngx-antd-json-schema-form>
```

Typescript:

```typescript
schema: [
  {
    key: "input",
    label: "input",
    type: "input",
    required: true,
    value: ""
  },
  {
    key: "input-hidden",
    label: "input-hidden",
    type: "input",
    required: true,
    hidden: true,
    value: "blah-blah"
  },
  {
    key: "checkbox",
    label: "checkbox",
    type: "checkbox",
    required: true,
    value: true
  },
  {
    key: "radio",
    label: "radio",
    type: "radio",
    required: true,
    value: "yes",
    options: [
      {
        label: "Yes",
        value: "yes"
      },
      {
        label: "No",
        value: "No"
      }
    ] as FormOption[]
  },
  {
    key: "radio-button",
    label: "radio-button",
    type: "radio-button",
    required: false,
    value: false,
    options: [
      {
        label: "Yes",
        value: true
      },
      {
        label: "No",
        value: false
      }
    ] as FormOption[]
  },
  {
    key: "select",
    label: "select",
    type: "select",
    options: [
      {
        label: "Option 1",
        value: "1"
      },
      {
        label: "Option 2",
        value: "2"
      }
    ] as FormOption[],
    value: "1"
  },
  {
    key: "textarea",
    label: "textarea",
    type: "textarea",
    required: true,
    value: ""
  },
  {
    key: "prism",
    label: "prism",
    type: "prism",
    language: "typescript",
    required: true,
    value:
      '[\n  {\n  "name": "user_id",\n  "isPii": false,\n  },\n  {\n  "name": "user_name",\n  "isPii": true,\n }\n]',
    disabled: true,
    fieldClass: "prism-class"
  },
  {
    key: "icon",
    label: "icon",
    type: "icon",
    required: false,
    value: "any value, does not matter",
    disabled: false,
    icon: {
      type: "check-circle",
      theme: "fill",
      class: "form-icon-class"
    } as FormIcon
  }
] as FormItem[];
settings: FormSettings = {
  fieldClass: "field-class"
};
```

## Options

| Option   | Type         | Description |
| -------- | ------------ | ----------- |
| schema   | FormItem[]   | json schema |
| settings | FormSettings | settings    |

## Item Options

| Option        | Type         | Description      |
| ------------- | ------------ | ---------------- |
| key           | string       | key              |
| label         | string       | label            |
| type          | string       | type             |
| placeholder   | string       | placeholder      |
| options       | FormOption[] | Array of options |
| disabled      | boolean      | disabled         |
| readonly      | boolean      | readonly         |
| value         | string       | value            |
| required      | boolean      | required         |
| language      | string       | language         |
| nzGutter      | number       | nzGutter         |
| itemClass     | string       | itemClass        |
| nzSpanLabel   | number       | nzSpanLabel      |
| labelClass    | string       | labelClass       |
| nzSpanControl | number       | nzSpanControl    |
| fieldClass    | string       | fieldClass       |

## Settings

| Setting       | Type   | Default | Description                                    |
| ------------- | ------ | ------- | ---------------------------------------------- |
| nzGutter      | number | 8       | nzGutter attr of ng-zorro-antd                 |
| itemClass     | string | ''      | class for the item                             |
| nzSpanLabel   | number | 8       | nzSpan attr of ng-zorro-antd for label         |
| labelClass    | string | ''      | class for the item-label                       |
| nzSpanControl | number | 16      | nzSpan attr of ng-zorro-antd for control-field |
| fieldClass    | string | ''      | class for the control-field                    |

## [License](https://github.com/BhavinPatel04/ngx-antd-json-schema-form/blob/master/LICENSE)

MIT
