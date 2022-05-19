import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    aspectRatio: '1/1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.7rem',
    padding: '0.5rem 0.6rem',
    paddingTop: '0.9rem',
    borderRadius: theme.borderRadius.main,
    backgroundColor: 'transparent',
  },
  active: {
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;
