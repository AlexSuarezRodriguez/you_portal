import { TextField, Typography } from '@material-ui/core';

export const renderText = ({ label, color, align, variant }) => (
  <Typography
    color={color || 'primary'}
    align={align || 'center'}
    variant={variant || 'h6'}
  >
    {label}
  </Typography>
);
export const renderInputText = ({ label, name, color, state, handleOnChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      color={color || 'primary'}
      variant="outlined"
      fullWidth
      size="small"
      name={name}
      value={data[name]}
      error={!!errors[name]}
      helperText={errors[name]}
      onChange={handleOnChange}
    />
  );
};
