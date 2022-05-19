import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 30,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(29px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#1956E2',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 29,
    height: 29,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Toggle = ({ width, label, defaultState, labelPosition, fontSize }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      margin: 0,
      gap: '0.3rem',
      marginTop: '.5rem',
      color: '#fff',

      [`& .MuiFormControlLabel-label `]: {
        fontSize: fontSize,
        fontWeight: 'bold',
      },
    },

    column: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontSize: '.5rem',
    },
  }));
  const classes = useStyles();

  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState((prev) => !prev);
  };

  return (
    <FormGroup style={{ width: width }}>
      <FormControlLabel
        className={`${classes.container} ${
          labelPosition === 'column' && classes.column
        }`}
        // style={{ flexDirection: reverse ? 'row' : 'row-reverse' }}
        control={
          <IOSSwitch checked={state} onChange={handleChange} name="checkedB" />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default Toggle;
