import React from 'react';
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from '@mui/styles';
import { InputBase } from '@mui/material';

const useStyles = makeStyles({
  input: {
    color: '#ffffff',
    borderBottom: '1px solid #ffffff',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  label: {
    fontSize: '1.1rem',
    display: 'block',
    marginBottom: '1rem',
    color: '#ffffff',
  }
});

interface SelectInputProps {
  label: string,
  defaultValue?: string,
  value: string,
  children: JSX.Element[],
  onChange: (event: SelectChangeEvent<any>) => void
}

export default function SelectInput({label, value, defaultValue, children, onChange}:SelectInputProps): JSX.Element { 
  const classes = useStyles();

  // const [value, setValue] = useState(defaultValue);

  // const handleChange = (event: SelectChangeEvent<any>) => {
  //   setValue(event.target.value);
  // };

  return (
    <FormControl fullWidth>
      <label className={classes.label}>{label}</label>
      <Select
        value={value}
        input={<InputBase />}
        onChange={onChange}
      >
        {children}
      </Select>
    </FormControl>
  );
};
