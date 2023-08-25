import React from 'react';
import './App.css';
import UserRegister from './components/UserRegister/UserRegister';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import { Box } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <UserRegister />
      <Box m={2}>
        <Table />
      </Box>
    </div>
  );
}

export default App;
