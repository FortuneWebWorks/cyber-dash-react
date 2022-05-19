import { Box, Slider, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 0.1rem',
    marginTop: '-0.7rem',
  },
  markContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '-0.8rem',
  },
  markText: {
    fontSize: '.8rem',
    color: '#fff',
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#0B1E39',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#5779aa',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Slide = ({ width, min, max }) => {
  const classes = useStyles();

  return (
    <Box width={width} className={classes.container}>
      <PrettoSlider
        track="normal"
        aria-labelledby="track-inverted-slider"
        defaultValue={50}
        min={min}
        max={max}
      />
      <Box className={classes.markContainer}>
        <Typography className={classes.markText}>{min}</Typography>
        <Typography className={classes.markText}>{max}</Typography>
      </Box>
    </Box>
  );
};

export default Slide;
