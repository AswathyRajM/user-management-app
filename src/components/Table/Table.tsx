import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function TableComponent() {
  const { userList } = useSelector((state: RootState) => state.users);
  // console.log(userList);

  React.useEffect(() => {}, [userList]);
  if (userList.length)
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label='simple table'>
          <TableHead style={{ backgroundColor: '#1565C0', color: '#fff' }}>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>Name</TableCell>
              <TableCell style={{ color: '#fff' }}>Email</TableCell>
              <TableCell style={{ color: '#fff' }}>Date of Birth</TableCell>
              <TableCell style={{ color: '#fff' }}>City</TableCell>
              <TableCell style={{ color: '#fff' }}>Pincode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row) => (
              <TableRow
                key={row.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.pincode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  else
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h4>No users found!</h4>{' '}
      </div>
    );
}
