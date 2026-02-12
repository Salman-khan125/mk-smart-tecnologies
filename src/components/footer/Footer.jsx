import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "/assets/navbar/logo.png";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#fff", borderTop: "1px solid #eee" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 6,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
          }}
        >
        
          <Box sx={{ flexShrink: 0 }}>
            <Box
              component="img"
              src={logo}
              alt="MK Smart Technologies"
              sx={{
                height: { xs: 50, md: 60 },
                mb: 2,
              }}
            />
          </Box>

          {/* Right-side content */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={6}
            sx={{
              columnGap: { md: 8 },
            }}
          >
            {/* Working Hours */}
            <Box>
              <Typography fontWeight={600} mb={1}>
                Working Hours
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mon–Fri: 09:00 am – 06:00 pm
              </Typography>
            </Box>

            {/* Address */}
            <Box>
              <Typography fontWeight={600} mb={1}>
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Second Floor, Mid City Mall,
                <br />
                near Rehman Abad,
                <br />
                Rawalpindi 48061
              </Typography>
            </Box>

            {/* Contact */}
           {/* Contact */}
<Box>
  <Typography fontWeight={600} mb={1}>
    Contact
  </Typography>

  {/* Clickable phone */}
  <Typography variant="body2" color="text.secondary">
    <Box
      component="a"
      href="https://wa.me/923408618145"
      sx={{
        color: "#68acf5",
        textDecoration: "none",
        transition: "0.3s",
        "&:hover": {
          color: "#0d4f96", // darker blue on hover
        },
      }}
    >
      +92 340 8618145
    </Box>
  </Typography>

  {/* Clickable email */}
  <Typography variant="body2" color="text.secondary">
    <Box
      component="a"
      href="mailto:mkstech.hr@gmail.com"
      sx={{
        color: "#1d85f5",
        textDecoration: "none",
        transition: "0.3s",
        "&:hover": {
          color: "#0d4f96",
        },
      }}
    >
      mkstech.hr@gmail.com
    </Box>
  </Typography>

  {/* Social Icons */}
  <Stack direction="row" spacing={1} mt={1}>
    <IconButton
      size="small"
      component="a"
      href="https://www.facebook.com/people/MK-Smart-Technologies/100089050854034/?rdid=MDdvNMvP4k1uJ0pn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GQ9eshTsr%2F"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#1d85f5",
        transition: "0.3s",
        "&:hover": { color: "#0d4f96" },
      }}
    >
      <FacebookIcon fontSize="medium" />
    </IconButton>

    <IconButton
      size="small"
      component="a"
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#1d85f5",
        transition: "0.3s",
        "&:hover": { color: "#0d4f96" },
      }}
    >
      <TwitterIcon fontSize="medium" />
    </IconButton>

    <IconButton
      size="small"
      component="a"
      href="https://www.linkedin.com/company/mk-smart-technologies/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "#68acf5",
        transition: "0.3s",
        "&:hover": { color: "#0d4f96" },
      }}
    >
      <LinkedInIcon fontSize="medium" />
    </IconButton>
  </Stack>
</Box>

          </Stack>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid #eee",
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © 2024 MK Smart Technologies. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
