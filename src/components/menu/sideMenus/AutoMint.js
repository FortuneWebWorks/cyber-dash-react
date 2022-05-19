import { useState } from 'react';
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
const items1 = ['Your Wallet', 'Private Key'];

// Mode
const modeItems = ['Main Flag', 'Condition'];
const SignatureTypeItems = ['Signed', 'Pre Signed'];

const AutoMint = () => {
  const classes = useStyles();

  // Mode change
  const [mode, setMode] = useState('Signed');
  const modeChangeHandler = (target) => {
    setMode(target);
  };

  // multi select change
  const [multiSelectValue, setMultiSelectValue] = useState('Signed');
  const onMultiSelectChange = (target) => {
    setMultiSelectValue(target);
  };

  // If it's private key
  const [isPrivateKey, setIsPrivateKey] = useState(null);
  const isPrivateKeyChangeHandler = (target) => {
    const bool = target === 'Private Key';
    setIsPrivateKey(() => bool);
  };

  return (
    <Box className={classes.formControl}>
      <DropDown
        label="Select Wallet"
        placeHolder="Select ..."
        width={'100%'}
        options={items1}
        callBack={isPrivateKeyChangeHandler}
      />

      {/* If Private Key */}
      {isPrivateKey && (
        <Input
          label="Private key"
          width={'100%'}
          placeHolder="12.3435 or 1.545345"
        />
      )}

      <DropDown
        label="RPC"
        placeHolder="Akhemy"
        width={'100%'}
        options={items}
      />

      {/* <Input label="RPC HTTPS URL *" width={'100%'} placeHolder="https://google.com" />

      <Input
        label="RPC WSS URL *"
        width={'100%'}
        placeHolder="https://google.com"
      /> */}

      <Input
        label="Contract Address *"
        width={'100%'}
        placeHolder="12.3435 or 1.545345"
      />

      <Box className={classes.twoElementContainer}>
        <Input label="ABI" width={'300%'} placeHolder="Fetch" />
        <CustomButton title="Get" />
      </Box>

      {/* If is not privaate key */}
      {!isPrivateKey && (
        <DropDown
          label="Signature type"
          placeHolder="Normal"
          width={'100%'}
          options={SignatureTypeItems}
        />
      )}

      <DropDown
        label="Mode"
        placeHolder="Normal"
        width={'100%'}
        callBack={modeChangeHandler}
        options={modeItems}
      />

      {/* Inputs generate related to fetched values */}
      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Mint Function"
          placeHolder="Mint -[1]"
          width={'50%'}
          options={items}
        />
        <DropDown
          label="Mint Parameters"
          placeHolder="[1]"
          width={'50%'}
          options={items}
        />
      </Box>

      {/* If it was Private key */}
      {isPrivateKey ? (
        <Box className={classes.twoElementContainer}>
          <Input label="Mint Price *" width={'50%'} placeHolder="1" />
          <Input label="Ton Count/Respeat" width={'50%'} placeHolder="1" />
        </Box>
      ) : (
        <Box className={classes.twoElementContainer}>
          <Input label="Mint Price *" width={'100%'} placeHolder="1" />
          {/* <Input label="Ton Count/Respeat" width={'50%'} placeHolder="1" /> */}
        </Box>
      )}

      <MultiSelect
        width={'100%'}
        options={['Auto', 'Multiplier', 'Custom']}
        callBack={onMultiSelectChange}
      />

      {/* If multi select = Multiplier */}
      {multiSelectValue === 'Multiplier' && (
        <Slide width={'100%'} min={0} max={90} />
      )}

      {/* If multi select = Custom */}
      {multiSelectValue !== 'Multiplier' && (
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
      )}

      {/* If main flag */}
      {mode !== 'Main Flag' && (
        <Box className={classes.twoElementContainer}>
          <DropDown
            label="Flip State Function"
            placeHolder="setPaused -[1]"
            width={'50%'}
            options={items}
          />
          <Input label="Flip State Caller" width={'100%'} placeHolder="[1]" />
        </Box>
      )}

      {/* if Condition */}
      {mode === 'Condition' && (
        <Box className={classes.twoElementContainer}>
          <Input
            label="Flip Function"
            width={'30%'}
            placeHolder="https://google.com"
            fontSize=".7rem"
          />
          <DropDown
            label="Oprators"
            placeHolder="Mint -[1]"
            width={'30%'}
            options={items}
            fontSize=".7rem"
          />
          <Input
            label="Value"
            width={'30%'}
            placeHolder="Value"
            fontSize=".7rem"
          />
        </Box>
      )}

      <Input
        label="Custom Hex Data"
        width={'100%'}
        placeHolder="fdsaasdffdssdjkjg"
      />

      <Box className={classes.twoElementContainer}>
        <Input label="Custom Gas Limit" width={'100%'} placeHolder=".com" />
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
          label="Years"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".8rem"
        />
        <DropDown
          label="Mounth"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".8rem"
        />
        <DropDown
          label="Day"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".8rem"
        />
      </Box>

      <Box className={classes.twoElementContainer}>
        <DropDown
          label="Hours"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".8rem"
        />
        <DropDown
          label="Minutes"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".8rem"
        />
        <DropDown
          label="Second"
          placeHolder="Mint -[1]"
          width={'30%'}
          options={items}
          fontSize=".8rem"
        />
      </Box>

      <CustomButton title="Create Task" />
    </Box>
  );
};

export default AutoMint;
