import React from 'react';
import Menus from './Menus';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={require('../../assets/Logo.jpg')}
          width="28px"
          height="42px"
          alt="대한예수교장로회로고"
        />
        <span>다음교회</span>
      </div>
      <Menus />
      <div className="user-account">
        <Button variant="outlined" size="small">
          <LoginIcon className="login-icon" fontSize="small" />
          로그인
        </Button>
        <Button variant="outlined">
          <HowToRegIcon fontSize="small" />
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
