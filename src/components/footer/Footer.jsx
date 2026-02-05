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
            gap: { xs: 4, md: 8 }, // 🔹 more space overall
          }}
        >
          {/* Logo */}
          <Box sx={{ flexShrink: 0 }}>
            <Box
              component="img"
              src={logo}
              alt="MK Smart Technologies"
              sx={{
                height: { xs: 50, md: 60 }, // 🔹 bigger logo
                mb: 2,
              }}
            />
          </Box>

          {/* Right-side content */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={6} // 🔹 more space between columns
            sx={{
              columnGap: { md: 8 }, // 🔹 extra horizontal breathing room
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
            <Box>
              <Typography fontWeight={600} mb={1}>
                Contact
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +92 340 8618145
              </Typography>
              <Typography variant="body2" color="text.secondary">
                mkstech.hr@gmail.com
              </Typography>

              <Stack direction="row" spacing={1} mt={1}>
                <IconButton size="small">
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <LinkedInIcon fontSize="small" />
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
