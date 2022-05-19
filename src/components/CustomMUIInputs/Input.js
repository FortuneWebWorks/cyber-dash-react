import { TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Input = ({ label, width, placeHolder, fontSize }) => {
  const useStyles = makeStyles((theme) => ({
    label: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: fontSize || '0.8rem',
    },
    textField: {
      width: '100%',
      height: '2rem',
      marginTop: '0.1rem',
      borderRadius: '10px',
      backgroundColor: '#0B1E39',
      color: '#fff',
      [`& fieldset`]: {
        borderRadius: '10px',
      },
    },
  }));
  const classes = useStyles();

  return (
    <Box width={width}>
      <label htmlFor="text" className={classes.label}>
        {label}
      </label>
      <TextField
        className={classes.textField}
        type="text"
        hiddenLabel
        variant="outlined"
        size="small"
        placeholder={placeHolder}
        sx={{ input: { color: '#fff' } }}
        inputProps={{
          style: {
            height: '0.7rem',
            borderRadius: '10px',
            fontSize: '0.8rem',
            outline: 'none',
            border: 'none',
            color: '#fff',
          },
        }}
      />
    </Box>
  );
};

export default Input;
