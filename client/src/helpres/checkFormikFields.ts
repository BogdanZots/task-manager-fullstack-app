import { AvailableAppFields } from "../config/config";
import * as Yup from "yup";

export const checkFormikFields = (value: any, field: any) => {
  switch (field.name) {
    case AvailableAppFields.DESCRIPTION:
      value[field.name] = Yup.string().min(6, "Must be 6 characters or less").required("Required");
      break;
    case AvailableAppFields.TITLE:
      value[field.name] = Yup.string()
        .min(15, "Must be 15 characters or less")
        .required("Required");
      break;

    default:
      break;
  }
};
