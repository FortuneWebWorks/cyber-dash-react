import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ReactComponent as DeleteIcon } from '../../../../assests/icons/delete.svg';
import { ReactComponent as CopyIcon } from '../../../../assests/icons/copy.svg';
import { ReactComponent as PauseIcon } from '../../../../assests/icons/pause.svg';
import { ReactComponent as FlagIcon } from '../../../../assests/icons/flag.svg';
import { ReactComponent as EditIcon } from '../../../../assests/icons/edit.svg';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'transparent',
    color: '#fff',
    // borderRadius: '20px',

    [`& *`]: {
      color: '#fff',
      border: 'none',
    },

    [`& tr:not(.MuiTableRow-head)`]: {
      backgroundColor: '#000F24',
    },

    [`& .MuiTableCell-root`]: {
      padding: '.3rem',
    },

    // Border right
    [`& .MuiTableCell-root:last-child`]: {
      borderRadius: '0 10px 10px 0',
      paddingRight: '0.5rem',
    },

    // Border Left
    [`& .MuiTableCell-root:first-child`]: {
      borderRadius: '10px 0 0 10px',
      paddingLeft: '1rem',
    },

    [`& .MuiTableRow-root`]: {
      borderRadius: '20px',
    },
  },
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ items }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contract Address</TableCell>
            <TableCell align="left">Mint Price</TableCell>
            <TableCell align="left">Gas Price/fee</TableCell>
            <TableCell align="left">Mode</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        {items.map((li) => (
          <Fragment key={li.contractAddress}>
            <TableBody>
              <TableRow style={{ backgroundColor: 'transparent' }}>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableBody>
            <TableBody key={li.contractAddress}>
              <TableRow>
                <TableCell align="left">Spam</TableCell>
                <TableCell align="left">Spam</TableCell>
                <TableCell align="left">fsdasdf</TableCell>
                <TableCell align="left">4sadf</TableCell>
                <TableCell align="left">asdf4</TableCell>

                <TableCell align="left" style={{ paddingTop: '.7rem' }}>
                  <FlagIcon />
                </TableCell>
                <TableCell align="left" style={{ paddingTop: '.7rem' }}>
                  <PauseIcon />
                </TableCell>
                <TableCell align="left" style={{ paddingTop: '.7rem' }}>
                  <EditIcon />
                </TableCell>
                <TableCell align="left" style={{ paddingTop: '.7rem' }}>
                  <CopyIcon />
                </TableCell>
                <TableCell align="left" style={{ paddingTop: '.7rem' }}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            </TableBody>
          </Fragment>
        ))}
      </Table>
    </TableContainer>
  );
}
