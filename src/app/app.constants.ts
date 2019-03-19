import { FormItem, FormOption } from "../../projects/ngx-antd-json-schema-form/src/lib/models";

export const APP_CONSTANTS = {
  SAMPLE_SCHEMA: [
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
        "[\n  {\n  \"name\": \"user_id\",\n  \"isPii\": false,\n  },\n  {\n  \"name\": \"user_name\",\n  \"isPii\": true,\n }\n]",
      disabled: true,
      fieldClass: "prism-class"
    }
  ] as FormItem[]
};
