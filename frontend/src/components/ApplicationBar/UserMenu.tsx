import { MouseEvent, useCallback, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserButton } from './UserButton';
import { useUser } from '../../hooks/useUser';

export const UserMenu = () => {
  const { user, logout } = useUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <UserButton onClick={handleClick} />
      <ArrowDropDownIcon fontSize="small" />
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Your profile</MenuItem>
        <MenuItem onClick={handleClose}>Your cocktails</MenuItem>
        <MenuItem onClick={handleClose}>Your reviews</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={logout}>Log out</MenuItem>
      </Menu>
    </>
  );
};
