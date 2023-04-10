import { roles } from "../const/consts";
import { CREATE_FORM } from "../const/consts";
import { ICreateItemColumns } from "../models/configModels/configModels";

//REDUX STORE

export const reduxStoreConfig = {
  reminds: "reminds",
};

//FORMS
export const addItemForm = [
  {
    value: "",
    handleInputChange: null,
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "name@example.com",
    label: "Enter title",
    name: "title",
  },
  {
    value: "",
    handleInputChange: null,
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your first name",
    label: "Enter description ",
    name: "description",
  },
];

export const registrationFormColumns = [
  {
    value: "",
    onChangeEvent: null,
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "name@example.com",
    label: "enter your e-mail",
  },
  {
    value: "",
    onChangeEvent: null,
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your first name",
    label: "your first name",
  },
  {
    value: "",
    onChangeEvent: null,
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your last name",
    label: "your last name",
  },
  {
    onChangeEvent: null,
    value: "",
    type: "password",
    className: "form-control",
    id: "floatingPassword",
    placeholder: "Password",
    label: "Password",
  },
];

// REG. DEFAULT FIELDS

export const registrationInputColumns = [
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "name@example.com",
    label: "enter your e-mail",
    name: "email",
  },
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your first name",
    label: "your first name",
    name: "name",
  },
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your last name",
    label: "your last name",
    name: "surname",
  },
  {
    type: "password",
    className: "form-control",
    id: "floatingPassword",
    placeholder: "Password",
    label: "Password",
    name: "password",
  },
];
export const loginInputColumns = [
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "name@example.com",
    label: "enter your e-mail",
    name: "email",
  },
  {
    type: "password",
    className: "form-control",
    id: "floatingPassword",
    placeholder: "Password",
    label: "Password",
    name: "password",
  },
];

export const selectRoleColumns = [
  {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    name: "role",
    label: "Select person role",
    options: [
      {
        value: roles.adminRole.ROLE_NAME,
        title: roles.adminRole.ROLE_TITLE,
      },
      {
        value: roles.userRole.ROLE_NAME,
        title: roles.userRole.ROLE_TITLE,
      },
    ],
  },
];
export const createItemColumns = [
  {
    type: "text",
    className: "form-control",
    id: "title",
    placeholder: "name@example.com",
    label: "Enter title",
    name: "title",
    required: true,
  },
  {
    type: "text",
    className: "form-control",
    id: "description",
    placeholder: "your first name",
    label: "Enter description ",
    name: "description",
    required: true,
  },
];

export const enum AvailableAppFields {
  DESCRIPTION = "description",
  TITLE = "title",
}

// TYPES

export interface configLengthProps {
  [key: string]: number;
}

export const configsLength: configLengthProps = {
  CREATE_FORM: createItemColumns.length,
};

export interface modalTypesProps {
  inputModal: string;
}
