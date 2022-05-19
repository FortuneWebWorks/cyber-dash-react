import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.2rem',
      backgroundColor: 'rgb(23, 61, 94)',
    },
    // '*::-webkit-scrollbar-track': {
    //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    // },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.light,
    },
  },

  formControl: {
    position: 'absolute',
    top: '50%',
    left: '100%',
    width: '18rem',
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.7rem',
    borderRadius: theme.borderRadius.secondary,
    padding: '1rem',
    backgroundColor: theme.palette.primary.light,
    transform: 'translateY(-50%)',
    overflow: 'auto',
    overflowX: 'hidden',
  },
  twoElementContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '0.7rem',
  },
}));

export default useStyles;
