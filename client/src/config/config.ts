import { roles } from "../const/consts";
import { CREATE_FORM } from "../const/consts";

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
    fieldName: "title",
  },
  {
    value: "",
    handleInputChange: null,
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your first name",
    label: "Enter description ",
    fieldName: "description",
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
    fieldName: "email",
  },
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your first name",
    label: "your first name",
    fieldName: "name",
  },
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your last name",
    label: "your last name",
    fieldName: "surname",
  },
  {
    type: "password",
    className: "form-control",
    id: "floatingPassword",
    placeholder: "Password",
    label: "Password",
    fieldName: "password",
  },
];
export const loginInputColumns = [
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "name@example.com",
    label: "enter your e-mail",
    fieldName: "email",
  },
  {
    type: "password",
    className: "form-control",
    id: "floatingPassword",
    placeholder: "Password",
    label: "Password",
    fieldName: "password",
  },
];

export const selectRoleColumns = [
  {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    fieldName: "role",
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
    id: "floatingInput",
    placeholder: "name@example.com",
    label: "Enter title",
    fieldName: "title",
  },
  {
    type: "text",
    className: "form-control",
    id: "floatingInput",
    placeholder: "your first name",
    label: "Enter description ",
    fieldName: "description",
  },
];

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
