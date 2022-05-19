import { Box, Typography } from '@material-ui/core';
import { ReactComponent as DashboardIcon } from '../../assests/icons/dashboard.svg';
import { ReactComponent as SnipeIcon } from '../../assests/icons/snipe.svg';
import { ReactComponent as AutoMintIcon } from '../../assests/icons/auto-mint.svg';
import { ReactComponent as BulkIcon } from '../../assests/icons/bulk.svg';
import useStyles from '../../styles/menuItem.css';
import Snipe from './sideMenus/Snipe';
import AutoMint from './sideMenus/AutoMint';
import Bulk from './sideMenus/Bulk';

const renderIcon = (key) => {
  switch (key) {
    case 'Dashboard':
      return <DashboardIcon />;
    case 'Snipe':
      return <SnipeIcon />;
    case 'Auto Mint':
      return <AutoMintIcon />;
    case 'Bulk':
      return <BulkIcon />;
    default:
      return;
  }
};

const renderMenu = (key) => {
  switch (key) {
    case 'Dashboard':
      return;
    case 'Snipe':
      return <Snipe />;
    case 'Auto Mint':
      return <AutoMint />;
    case 'Bulk':
      return <Bulk />;
    default:
      return;
  }
};

const MenuItem = ({ title, active, onClickHandler }) => {
  const classes = useStyles();

  return (
    <Box
      className={`${classes.button} ${active === title && classes.active}`}
      onClick={onClickHandler.bind(null, title)}
    >
      {renderIcon(title)}
      <Typography className={classes.title}>{title}</Typography>

      {active === title && renderMenu(title)}
    </Box>
  );
};

export default MenuItem;
