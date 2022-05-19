import { useState } from 'react';
import { MenuItem, Select, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as ArrowIcon } from '../../assests/icons/arrow_down.svg';

const DropDown = ({
  label,
  width,
  placeHolder,
  options,
  fontSize,
  callBack,
}) => {
  const useStyles = makeStyles((theme) => ({
    select: {
      height: '2rem',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '10px',
      color: '#fff',
      fontSize: '0.8rem',
      marginTop: '0.1rem',
      paddingLeft: '0.8rem',
    },
    label: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: fontSize || '0.8rem',
    },
  }));
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState('');

  const onChangeHedler = (e) => {
    setSelectValue(e.target.value);

    callBack && callBack(e.target.value);
  };

  return (
    <Box width={width}>
      <label htmlFor="wallet" className={classes.label}>
        {label}
      </label>
      <Select
        // IconComponent={() => <ArrowIcon />}
        displayEmpty={true}
        renderValue={(value) =>
          value?.length
            ? Array.isArray(value)
              ? value.join(', ')
              : value
            : placeHolder
        }
        fullWidth
        className={classes.select}
        id="wallet"
        disableUnderline
        inputProps={{ 'aria-label': 'Without label' }}
        value={selectValue}
        onChange={onChangeHedler}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default DropDown;
