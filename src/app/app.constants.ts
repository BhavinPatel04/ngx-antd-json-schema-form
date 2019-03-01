export const APP_CONSTANTS = {
  SAMPLE_SCHEMA: [
    {
      key: "platform",
      label: "platform",
      type: "string",
      required: true,
      value: "sp2"
    },
    {
      key: "sae",
      label: "sae",
      type: "string",
      required: true,
      value: "bhavinpatel"
    },
    {
      key: "sla",
      label: "sla",
      type: "string",
      required: true,
      value: "3"
    },
    {
      key: "name",
      label: "name",
      type: "string",
      required: true,
      value: "blah"
    },
    {
      key: "version",
      label: "version",
      type: "string",
      required: true,
      value: "1.0.0"
    },
    {
      key: "description",
      label: "description",
      type: "string",
      required: true,
      value: "desc for blah"
    },
    {
      key: "isPartitioned",
      label: "isPartitioned",
      type: "bool",
      required: true,
      value: true
    },
    {
      key: "versionDescription",
      label: "versionDescription",
      type: "string",
      required: true,
      value: "initial version"
    },
    {
      key: "isDeactivated",
      label: "isDeactivated",
      type: "bool",
      required: false
    },
    {
      key: "status",
      label: "status",
      type: "string",
      required: false
    },
    {
      key: "health",
      label: "health",
      type: "string",
      required: false
    },
    {
      key: "dataRefreshDt",
      label: "dataRefreshDt",
      type: "string",
      required: false
    },
    {
      key: "createdBy",
      label: "createdBy",
      type: "string",
      required: true,
      value: "someBlah"
    },
    {
      key: "createdDt",
      label: "createdDt",
      type: "string",
      required: true,
      value: "2019-01-27 12:00:00"
    },
    {
      key: "updatedBy",
      label: "updatedBy",
      type: "string",
      required: true,
      value: "anotherBlah"
    },
    {
      key: "updatedDt",
      label: "updatedDt",
      type: "string",
      required: true,
      value: "2019-01-27 12:00:00"
    },
    {
      key: "selectOption",
      label: "Select Option",
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
      ],
      value: "1"
    },
    {
      key: "columns",
      label: "columns",
      type: "prism",
      language: "typescript",
      required: true,
      value:
        "[\n  {\n  \"name\": \"user_id\",\n  \"isPii\": false,\n  },\n  {\n  \"name\": \"user_name\",\n  \"isPii\": true,\n }\n]",
      disabled: true,
      fieldClass: "prism-class"
    },
    {
      key: "submit",
      label: "Submit",
      type: "button",
      class: "submit-button-container"
    }
  ]
};
