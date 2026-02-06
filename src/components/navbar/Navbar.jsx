import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom"; 

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
];



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <AppBar maxWidth="lg"
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
          {/* LEFT SIDE LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: -2 }}>
            <Box
              component="img"
              src="assets/navbar/logo.png"
              alt="MK Smart Technologies"
              sx={{
                height: { xs: 45, md: 60 },
                cursor: "pointer",
              }}
            />
          </Box>

          {/* RIGHT SIDE (LINKS + BUTTON OR MENU ICON) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {/* Mobile Menu Icon */}
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
              {navLinks.map((link) => (
              <Typography
  key={link.name}
  component={Link}
  to={link.path}
  sx={{
    position: "relative",
    fontSize: 15,
    fontWeight: 550,
    color: "#3A2357",
    cursor: "pointer",
    textDecoration: "none",

    // underline element
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -6,
      width: "0%",
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


              ))}

              <Button
                   variant="contained"
                component={Link}           // ✅ Contact button also navigates
                to="/contact"
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

      
    {/* MOBILE DRAWER */}
<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
  <Box
    sx={{ width: 250, p: 2 }}
    role="presentation"
    onClick={() => setOpen(false)}
  >
 <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 3   }}>
            <Box
              component="img"
              src="assets/navbar/logo.png"
              alt="MK Smart Technologies"
              sx={{
                height: { xs: 45, md: 60 },
                cursor: "pointer",
              }}
            />
          </Box>

    <List>
      {navLinks.map((link) => (
        <ListItem  button
                key={link.name}
                component={Link}    
                to={link.path}>
          <ListItemText primary={link.name} />
        </ListItem>
      ))}
    </List>

    <Button
      fullWidth
            component={Link}            
            to="/contact"
            variant="contained"
      sx={{
        mt: 30,
        borderRadius: 2,
        px: 3,
        py: 1,
        fontSize: 14,
        fontWeight: 500,
        backgroundColor: "#E30613",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#c20510",
        },
      }}
    >
      Contact Us
    </Button>
  </Box>
</Drawer>

    </AppBar>
  );
};

export default Navbar;
