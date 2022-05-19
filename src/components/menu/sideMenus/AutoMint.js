import { Box } from '@material-ui/core';
import useStyles from '../../../styles/sideMenus/Snipe.css';
import DropDown from '../../CustomMUIInputs/DropDown';
import Input from '../../CustomMUIInputs/Input';
import MultiSelect from '../../CustomMUIInputs/MultiSelect';
import Toggle from '../../CustomMUIInputs/Toggle';
import Slide from '../../CustomMUIInputs/Slide';
import Result from '../../CustomMUIInputs/Result';
import CustomButton from '../../CustomButton/index';

const items = ['val1', 'val2', 'val3', 'val4'];

const AutoMint = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formControl}>
      <DropDown
        label="Select Wallet"
        placeHolder="Your Wallet"
        width={'100%'}
        options={items}
      />

      <DropDown
        label="RPC"
        placeHolder="Akhemy"
        width={'100%'}
        options={items}
      />

      <Input label="Snipe Below *" width={'100%'} placeHolder="10" />

      <Input label="Snipe Below Rank" width={'100%'} placeHolder="10" />

      <Input
        label="Ignore Tokens"
        width={'100%'}
        placeHolder="12.3435 or 1.545345"
      />

      <Box className={classes.twoElementContainer}>
        <Input
          label="Collection Slug *"
          width={'300%'}
          placeHolder="Boardssdfsgclub"
        />
        <CustomButton title="Get" />
      </Box>

      <DropDown
        label="Select Wallet"
        placeHolder="Your Wallet"
        width={'100%'}
        options={items}
      />

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'50%'}
          options={items}
        />
        <DropDown
          label="Trait Value"
          placeHolder="[1]"
          width={'50%'}
          options={items}
        />
      </Box>

      <Box className={classes.twoElementContainer}>
        <Input label="Max Buy *" width={'50%'} placeHolder="1" />
        <Input label="Max Buy" width={'50%'} placeHolder="1" />
      </Box>

      <MultiSelect width={'100%'} />

      <Slide width={'100%'} min={-10000} max={10000} />

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'50%'}
          options={items}
        />
        <Input
          label="Max Peiority Fee"
          width={'100%'}
          placeHolder="https://google.com"
        />
      </Box>

      <Input
        label="RPC URL *"
        width={'100%'}
        placeHolder="https://google.com"
      />

      <Box className={classes.twoElementContainer}>
        <Input label="Max Fee Per Gas" width={'100%'} placeHolder=".com" />
        <Result />
      </Box>

      <Toggle
        width="100%"
        label="Timer Enable?"
        defaultState={true}
        labelPosition="left"
      />

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".7rem"
        />
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".7rem"
        />
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".7rem"
        />
      </Box>

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".7rem"
        />
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".7rem"
        />
        <DropDown
          label="Snipe Trait"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".7rem"
        />
      </Box>

      <CustomButton title="Load Traits" />
    </Box>
  );
};

export default AutoMint;
