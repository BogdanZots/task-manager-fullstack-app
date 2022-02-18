import { CREATE_FORM, REGISTRATION_FORM } from "../../../const/consts";
import Box from "@mui/material/Box";
import CreateItemForm from "./Forms/CreateItemForm";
import RegistrationForm from "../../RegistrationPage/ResistrationForm";
/* interface IBasicFormProps {
  type: string;
  fields: any[];
} */

export default function BasicForm(
  { type, userId, getColumnsData, inputColumns } /* : IBasicFormProps */
) {
  console.log("re render");

  const handleButtonClick = /* React.useCallback( */ (data) => {
    console.log("ALARM", data);
    return () => {
      return getColumnsData(data);
    };
  };
  /*  }, []) */ //@ts-ignore
  const renderBasicForm = (type /* : string */) /* : JSX.Element */ => {
    switch (type) {
      case CREATE_FORM:
        return (
          <CreateItemForm
            getColumnsData={handleButtonClick}
            inputColumns={inputColumns}
            userId={userId}
          />
        );
      case REGISTRATION_FORM:
        return (
          <RegistrationForm
            inputColumns={inputColumns}
            getColumnsData={handleButtonClick}
            userId={userId}
          />
        );
      default:
        <div>There is no data to display</div>;
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>{renderBasicForm(type)}</Box>
  );
}
