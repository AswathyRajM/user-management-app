import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setDialougOpen } from '../../redux/dialogSlice';

function NavBar() {
  const dispatch = useDispatch();

  // const [timer, setTimer] = useState<any>(null);

  // const handleSeahcInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let search = e.target.value;
  //   clearTimeout(timer);
  //   if (!search) {
  //     // dispatch(clearState());
  //     // dispatch(setSearchTerm(''));
  //     return;
  //   }

  //   // debounce technique
  //   const newTimer = setTimeout(() => {
  //     // dispatch(clearState());
  //     // dispatch(setSearchTerm(text));
  //   }, 700);
  //   setTimer(newTimer);
  // };

  return (
    <div className='navbar'>
      <div className='search-box'>
        <h3>User Management</h3>
        <TextField
          className='search-input'
          id='outlined-search'
          label='Search users'
          type='search'
        />
      </div>
      <Button
        className='reg-btn'
        variant='contained'
        onClick={(e: any) => dispatch(setDialougOpen())}
      >
        Register
      </Button>
    </div>
  );
}

export default NavBar;
