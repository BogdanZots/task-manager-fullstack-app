import InputItem from "../../../../Input/InputItem";
import BasicSelect from "../../../../../Select/Select";
import { selectRoleColumns } from "../../../../../../config/config";

const RegistrationForm = ({ onChange, columns, userId, submitForm }: any) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    submitForm();
  };


  return (
    <main className="form-signin text-center d-flex justify-content-center col-12">
      <form className="col-6">
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        {columns.map((column: any) => {
          return (
            <InputItem
              onChangeEvent={onChange}
              type={column.type}
              className={column.className}
              id={column.id}
              placeholder={column.placeholder}
              label={column.label}
              fieldName={column.fieldName}
            />
          );
        })}

        <BasicSelect
          onChangeEvent={onChange}
          columns={selectRoleColumns}
          title="Select person role"
        />
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={handleFormSubmit}
        >
          Sign up
        </button>
      </form>
    </main>
  );
};

export default RegistrationForm;
