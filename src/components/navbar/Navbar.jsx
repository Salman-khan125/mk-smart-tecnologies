import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 80,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center", ml: -2 }}>
              <Box
                component={Link}
                to="/"
                sx={{ display: "flex" }}
              >
                <Box
                  component="img"
                  src="/assets/navbar/logo.png"
                  alt="MK Smart Technologies"
                  sx={{
                    height: { xs: 45, md: 60 },
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>

            {/* RIGHT SIDE */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {/* Mobile Menu */}
              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Desktop Links */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 4,
                }}
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <Typography
                      key={link.name}
                      component={Link}
                      to={link.path}
                      sx={{
                        position: "relative",
                        fontSize: 15,
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "#E30613" : "#3A2357",
                        textDecoration: "none",
                        transition: "all 0.3s ease",

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          bottom: -6,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: "#E30613",
                          transition: "width 0.3s ease",
                        },

                        "&:hover": {
                          color: "#E30613",
                        },

                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  );
                })}

                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  sx={{
                    backgroundColor: "#E30613",
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    fontSize: 14,
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#c20510",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: 280, sm: 320 },
            backgroundImage: `url('/assets/navbar/bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            position: "relative",
          },
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.8)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 4,
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: 5 }}>
            <Box
              component="img"
              src="/assets/navbar/logo.png"
              alt="MK Smart Technologies"
              sx={{ height: 55 }}
            />
          </Box>

          {/* Links */}
          <List sx={{ flexGrow: 1 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <ListItem key={link.name} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    sx={{
                      borderRadius: 2,
                      mb: 1.5,
                      px: 2,
                      py: 1,
                      bgcolor: isActive
                        ? "rgba(197, 132, 137, 0.25)"
                        : "transparent",
                      border: isActive
                        ? "1px solid #E30613"
                        : "1px solid transparent",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        bgcolor: "rgba(227,6,19,0.15)",
                        transform: "translateX(6px)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 500,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Contact Button */}
          <Button
            component={Link}
            to="/contact"
            onClick={() => setOpen(false)}
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 3,
              py: 1.3,
              fontSize: 15,
              fontWeight: 600,
              bgcolor: "#E30613",
              textTransform: "none",
              boxShadow: "0 10px 25px rgba(227,6,19,0.4)",
              "&:hover": {
                bgcolor: "#c20510",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
