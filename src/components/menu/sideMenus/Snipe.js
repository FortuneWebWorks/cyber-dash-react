import { Box } from '@material-ui/core';
import useStyles from '../../../styles/sideMenus/Snipe.css';
import DropDown from '../../CustomMUIInputs/DropDown';
import Input from '../../CustomMUIInputs/Input';
import MultiSelect from '../../CustomMUIInputs/MultiSelect';
import Result from '../../CustomMUIInputs/Result';
import CustomButton from '../../CustomButton/index';

const items = ['val1', 'val2', 'val3', 'val4'];

const Snipe = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formControl}>
      <DropDown
        label="Select Wallet"
        placeHolder="Your Wallet"
        width={'100%'}
        options={items}
      />

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Marked Place"
          placeHolder="OpenSea"
          width={'50%'}
          options={items}
        />
        <Input label="Max Buy" width={'50%'} placeHolder="1" />
      </Box>

      <Box className={classes.twoElementContainer}>
        <Input
          label="Collection Slug *"
          width={'150%'}
          placeHolder="Boardssdfsgclub"
        />
        <CustomButton title="Load Traits" />
      </Box>

      <Input label="Snipe Below *" width={'100%'} placeHolder="10" />

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Snipe Trait"
          placeHolder="(1) Selectd"
          width={'45%'}
          options={items}
        />
        <DropDown
          label="Trait Value"
          placeHolder="(1) selected"
          width={'45%'}
          options={items}
        />
      </Box>

      <Input label="Snipe Below Rank" width={'100%'} placeHolder="10" />

      <Input
        label="Ignore Tokens"
        width={'100%'}
        placeHolder="12.3435 or 1.545345"
      />

      <DropDown
        label="RPC"
        placeHolder="Akhemy"
        width={'100%'}
        options={items}
      />

      <Input
        label="RPC URL *"
        width={'100%'}
        placeHolder="https://google.com"
      />

      <MultiSelect width={'110%'} />

      <Box className={classes.twoElementContainer}>
        <Input
          label="Max Fee Per Gas"
          width={'100%'}
          placeHolder="https://google.com"
          fontSize=".6rem"
        />
        <Input
          label="Max Peiority Fee"
          width={'100%'}
          placeHolder="https://google.com"
          fontSize=".6rem"
        />
        <Input
          label="Gass Limit"
          width={'100%'}
          placeHolder="https://google.com"
          fontSize=".6rem"
        />
      </Box>

      <Result />

      <CustomButton title="Load Traits" />
    </Box>
  );
};

export default Snipe;
