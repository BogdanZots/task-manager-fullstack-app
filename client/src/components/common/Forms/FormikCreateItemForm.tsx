import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { checkFormikFields } from "../../../helpres/checkFormikFields";

interface IField {
  [key: string]: any;
}

type FieldsArray = Array<IField>;

interface IFormFields<T> {
  fields: T;
  onChange: (fieldName: string, newValue: any) => void;
  values: any;
}

interface IFormikForm {
  onChange: (fieldName: string, newValue: any) => void;
  columns: Array<any>;
  onSubmit: () => void;
}

const FormFields = ({ fields, onChange, values }: IFormFields<FieldsArray>) => {
  console.log("fields", fields, "values", values);
  return (
    <>
      {fields.map(field => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <Field
            type="text"
            name={field.name}
            onKeyUp={() => {
              onChange(field.name, values[field.name]);
            }}
          />
          <ErrorMessage name={field.name} component="div" />
        </div>
      ))}
    </>
  );
};

export const FormikCreateItemForm = ({ onChange, onSubmit, columns }: IFormikForm) => {
  const fields = columns;

  const initialValues = fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {});

  const validationSchema = Yup.object().shape(
    fields.reduce((acc, field) => {
      checkFormikFields(acc, field);
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {props => {
          const isTouched = Object.entries(props.touched).length !== 0;
          return (
            <Form>
              <FormFields fields={columns} onChange={onChange} values={props.values} />
              <button type="submit" disabled={!props.isValid || props.isSubmitting || !isTouched}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
