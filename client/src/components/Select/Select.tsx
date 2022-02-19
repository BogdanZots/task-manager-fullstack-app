import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IOptionsColumns {
  value: string;
  title: string;
}

interface IBasicColumn {
  labelId: string;
  id: string;
  fieldName: string;
  label: string;
  options: IOptionsColumns[];
}

interface IBasicSelectProps {
  columns: IBasicColumn[];
  onChangeEvent: (fieldName: string, newValue: any) => void;
  title: string;
}
//@ts-ignore
const renderOptions = (options: IOptionsColumns[]): ReactElement => {
  return options.map((option: any) => {
    return <MenuItem value={option.value}>{option.title}</MenuItem>;
  });
};

export default function BasicSelect({
  columns,
  title,
  onChangeEvent,
}: IBasicSelectProps) {
  const [value, setValue] = React.useState("");
  const handleChange = (fieldName: string, newValue: string) => {
    setValue(newValue);
    onChangeEvent(fieldName, newValue);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
        {columns.map((column, i) => {
          return (
            <Select
              labelId={column.labelId}
              id={column.id}
              value={value}
              label={column.label}
              onChange={(e) => handleChange(column.fieldName, e.target.value)}>
              {renderOptions(column.options)}
            </Select>
          );
        })}
      </FormControl>
    </Box>
  );
}
