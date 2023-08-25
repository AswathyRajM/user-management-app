import React, { useState } from 'react';
import './NavBar.css';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setDialougOpen } from '../../redux/dialogSlice';
import { clearSearch, searchUser } from '../../redux/userSlice';

function NavBar() {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState<any>(null);

  const handleSeahcInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let search = e.target.value;

    clearTimeout(timer);

    // if search term is empty reset the table data to default
    if (!search) {
      dispatch(clearSearch());
      return;
    }

    // debounce technique
    const newTimer = setTimeout(() => {
      dispatch(searchUser(search.toLowerCase()));
    }, 700);
    setTimer(newTimer);
  };

  return (
    <div className='navbar'>
      <div className='search-box'>
        <h3>User Management</h3>
        <TextField
          className='search-input'
          id='outlined-search'
          label='Search users'
          type='search'
          onChange={(e) => handleSeahcInputChange(e)}
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
