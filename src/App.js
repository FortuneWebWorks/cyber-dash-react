import { useState } from 'react';
import Board from './components/board/Board';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import theme from './styles/theme';
import useStyles from './styles/main.css';
import MenuItem from './components/menu/MenuItem';

export default function App() {
  const classes = useStyles();

  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const changeActiveHandler = (title) => {
    setActiveMenu(title);
  };

  const menuItems = ['Dashboard', 'Snipe', 'Auto Mint', 'Bulk'];

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box height="5rem" bgcolor={theme.palette.primary.main}></Box>
      <Box className={classes.mainContainer}>
        {/* Menu */}
        <Box className={classes.menu}>
          {menuItems.map((title) => (
            <MenuItem
              key={title}
              title={title}
              onClickHandler={changeActiveHandler}
              active={activeMenu}
            />
          ))}
        </Box>
        {/* Board */}
        <Box className={classes.board}>
          <Board />
        </Box>
      </Box>
    </Container>
  );
}
