import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#1956E2',
    display: 'flex',
    width: '100%',
    height: '2rem',
    border: 'none',
    borderRadius: 27,
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.6) !important',
    },
  },
}));
export default useStyles;
