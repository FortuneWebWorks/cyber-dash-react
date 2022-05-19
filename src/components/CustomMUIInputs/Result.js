import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  reslutContent: {
    margin: 0,
    padding: 0,
  },
}));

const Result = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.reslutContent}>Estimated Total:</p>
      <h3 className={classes.reslutContent}>__,__ ETH</h3>
    </div>
  );
};

export default Result;
