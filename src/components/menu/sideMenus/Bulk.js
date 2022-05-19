import { Box } from '@material-ui/core';
import useStyles from '../../../styles/sideMenus/Snipe.css';
import DropDown from '../../CustomMUIInputs/DropDown';
import Input from '../../CustomMUIInputs/Input';
import MultiSelect from '../../CustomMUIInputs/MultiSelect';
import Toggle from '../../CustomMUIInputs/Toggle';
import Result from '../../CustomMUIInputs/Result';
import CustomButton from '../../CustomButton/index';

const items = ['val1', 'val2', 'val3', 'val4'];

const Bulk = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formControl}>
      <Input label="Snipe Below *" width={'100%'} placeHolder="10" />

      <Input label="Snipe Below *" width={'100%'} placeHolder="10" />

      <Box className={classes.twoElementContainer}>
        <Input label="Collection" width={'33%'} placeHolder="Boardssdfsgclub" />
        <Input label="CSlug *" width={'33%'} placeHolder="Boardssdub" />
        <DropDown
          label="Trait"
          placeHolder="(1) Selectd"
          width={'33%'}
          options={items}
        />
      </Box>

      <Box className={classes.twoElementContainer}>
        <Toggle
          width="33%"
          label="Timer Enable?"
          defaultState={true}
          labelPosition="column"
        />
        <Input label="CSlug *" width={'33%'} placeHolder="Boardssdub" />
        <DropDown
          label="Trait"
          placeHolder="(1) Selectd"
          width={'33%'}
          options={items}
        />
      </Box>

      <DropDown
        label="RPC"
        placeHolder="Akhemy"
        width={'100%'}
        options={items}
      />

      <Input label="Snipe Below *" width={'100%'} placeHolder="10" />

      <CustomButton title="Load Traits" className={classes.btn} />
    </Box>
  );
};

export default Bulk;
