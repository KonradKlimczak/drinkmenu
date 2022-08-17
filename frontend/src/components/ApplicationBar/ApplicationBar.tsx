import LocalBarIcon from "@mui/icons-material/LocalBar";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getUser } from "../../selectors/user";
import { UserMenu } from "./UserMenu";

export const ApplicationBar = () => {
  const user = useSelector(getUser);

  const handleCreateAccount = useCallback(() => {
    console.log("handleCreateAccount");
  }, []);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <LocalBarIcon />
        <Typography component={RouterLink} to="/" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Drinkly
        </Typography>
        {user ? (
          <>
            <Button component={RouterLink} to="/create-cocktail" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Add new Cocktail
            </Button>
            <UserMenu />
          </>
        ) : (
          <>
            <Button color="primary" onClick={handleCreateAccount} sx={{ marginRight: 1 }}>
              Create Account
            </Button>
            <Button component={RouterLink} variant="contained" color="primary" to="/sign-in">
              Log in
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
