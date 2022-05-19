import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    height: '100vh',
    padding: '0.1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    margin: '1rem 6rem',
  },
  menu: {
    position: 'relative',
    width: '8rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: theme.borderRadius.main,
    padding: '0.7rem',
    backgroundColor: theme.palette.primary.main,
  },
  board: {
    width: '100%',
    height: '100%',
    borderRadius: theme.borderRadius.main,
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
