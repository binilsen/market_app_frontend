import { Badge, Box, IconButton } from "@mui/material";
import {
  AccountCircle,
  Help,
  Home,
  Login,
  Logout,
  Notifications,
  PersonAdd,
  Mail,
  ShoppingCart,
} from "@mui/icons-material";
import Link from "next/link";
import { useAuthStore } from "@/store";

const UserNav = () => {
  const { loggedIn, logoutUser } = useAuthStore((state) => state);

  return loggedIn ? (
    <Box sx={{ display: { xs: "none", md: "flex", gap: 10 } }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        LinkComponent={Link}
        href="/dashboard"
        color="inherit"
      >
        <Home />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        LinkComponent={Link}
        href="/profile"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        LinkComponent={Link}
        href="/cart"
      >
        <ShoppingCart />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        onClick={logoutUser}
      >
        <Logout />
      </IconButton>
    </Box>
  ) : (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        LinkComponent={Link}
        href="/register"
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        <PersonAdd />
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        LinkComponent={Link}
        href="/login"
      >
        <Login />
      </IconButton>
      <IconButton
        LinkComponent={Link}
        href="/about"
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
      >
        <Help />
      </IconButton>
    </Box>
  );
};

export default UserNav;
