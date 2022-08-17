import { MouseEvent, useCallback, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserButton } from "./UserButton";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../selectors/user";
import { logout } from "../../slices/userSlice";

export const UserMenu = () => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logout);
  }, [dispatch]);

  if (!user) {
    return null;
  }

  return (
    <>
      <UserButton onClick={handleClick} />
      <ArrowDropDownIcon fontSize="small" />
      <Menu id="user-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </>
  );
};
