import { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ActiveBtn: {
    width: '100%',
    color: '#fff',
    fontSize: '0.8rem',
    borderRadius: '20px',

    [`&.Mui-selected`]: {
      backgroundColor: '#1956E2',
      color: '#fff',
      borderRadius: '20px',

      [`&:hover`]: {
        backgroundColor: '#1956E2',
      },
    },
  },
  toggleBtns: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.4rem 0',
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
  },
}));

const MultiSelect = ({ label, width, options, callBack }) => {
  const classes = useStyles();

  // Toggle buttons active
  const [alignment, setAlignment] = useState('Custom');

  const handleToggle = (e, newAlignment) => {
    setAlignment(newAlignment);
    callBack && callBack(newAlignment);
  };

  return (
    <Box width={width} className={classes.toggleBtns}>
      <label htmlFor="text" className={classes.label}>
        {label}
      </label>
      <ToggleButtonGroup
        className={classes.buttonsContainer}
        value={alignment}
        exclusive
        onChange={handleToggle}
        variant="contained"
        size="small"
        orientation="horizontal"
        style={{ width: width }}
      >
        {options &&
          options.map((option) => (
            <ToggleButton
              key={option}
              className={classes.ActiveBtn}
              value={option}
              size="small"
            >
              {option}
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default MultiSelect;
