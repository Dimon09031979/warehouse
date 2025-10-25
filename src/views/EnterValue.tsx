import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

type Props = {
  name: string,
  uploadValue: (value: string) => void,
  reset: boolean
};

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  margin: '8px 0px',

  '& .MuiInputBase-root': {
    fontSize: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },

  '& .MuiInputLabel-root': {
    fontSize: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
}));

const EnterValue: React.FunctionComponent<Props> = (props) => {
  const [value, setValue] = useState<string>('');
  useEffect(() => {
    setValue('');
  }, [props.reset]);

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
    props.uploadValue(event.target.value);
  };

  return (
    <TextFieldStyled
      label={props.name}
      value={value}
      onChange={handleChange}
      size="small"
      fullWidth
    />
  );
};

export default EnterValue;
