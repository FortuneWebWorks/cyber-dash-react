import { Box } from '@material-ui/core';
import useStyles from '../../../styles/sideMenus/Snipe.css';
import DropDown from '../../CustomMUIInputs/DropDown';
import Input from '../../CustomMUIInputs/Input';
import Toggle from '../../CustomMUIInputs/Toggle';
import CustomButton from '../../CustomButton/index';

const items = ['val1', 'val2', 'val3', 'val4'];

const Bulk = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formControl}>
      <Input
        label="Contract Address *"
        width={'100%'}
        placeHolder="asdfsdfaadfsadfsasdf"
      />

      <Input label="Token" width={'100%'} placeHolder="10" />

      <Box className={classes.twoElementContainer}>
        <Input label="Price *" width={'33%'} placeHolder="200" />
        <Input label="Expiry Time *" width={'33%'} placeHolder="5" />
        <DropDown
          label="Type *"
          placeHolder="(1) Selectd"
          width={'33%'}
          options={items}
        />
      </Box>

      <Box className={classes.twoElementContainer}>
        <Toggle
          width="33%"
          label="Overbid?"
          defaultState={true}
          labelPosition="column"
          fontSize=".5rem"
        />
        <Input
          label="Overbid Increase"
          width={'33%'}
          placeHolder="5"
          fontSize=".5rem"
        />
        <DropDown
          label="Overbid Max Price"
          placeHolder="(1) Selectd"
          width={'33%'}
          options={items}
          fontSize=".5rem"
        />
      </Box>

      <DropDown
        label="RPC"
        placeHolder="Akhemy"
        width={'100%'}
        options={items}
      />

      <Input
        label="RPC URL *"
        width={'100%'}
        placeHolder="https://Google.com"
      />

      <CustomButton title="Create Task" className={classes.btn} />
    </Box>
  );
};

export default Bulk;
