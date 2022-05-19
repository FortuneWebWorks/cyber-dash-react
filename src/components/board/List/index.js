import React from 'react';
import ListItem from './ListItem/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 2rem',
    color: '#fff',
  },
  ul: {
    width: '100%',
    padding: 0,
    margin: 0,
    borderRadius: '20px',
  },
}));

const items = [
  { contractAddress: 'sdfa' },
  { contractAddress: 'geg' },
  { contractAddress: 'get' },
];
const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 style={{ alignSelf: 'flex-start' }}>Tasks</h3>

      <ul className={classes.ul}>
        <ListItem type="title" items={items} />
      </ul>
    </div>
  );
};

export default List;
