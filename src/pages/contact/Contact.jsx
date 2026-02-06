import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, md: 320 },
          backgroundImage: `url("/assets/services/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ color: "#fff", opacity: 0.85 }}>
            Home / Contact
          </Typography>
        </Box>
      </Box>

      {/* ===== MAIN CONTENT ===== */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* ===== LEFT INFO ===== */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                  color: "#3A2357",
                  mb: 2,
                }}
              >
                Let’s Talk
              </Typography>

              <Typography
                sx={{
                  color: "#7A6F86",
                  mb: 4,
                  maxWidth: 420,
                  lineHeight: 1.7,
                }}
              >
                Have a project in mind or need help with your digital
                solutions? Our team is ready to assist you. Reach out and
                let’s build something great together.
              </Typography>

              {/* INFO BLOCKS */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>
                  📍 Address
                </Typography>
                <Typography sx={{ color: "#7A6F86" }}>
                 Second Floor, Mid City Mall,
near Rehman Abad,
Rawalpindi 48061
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>
                  ✉️ Email
                </Typography>
                <Typography sx={{ color: "#7A6F86" }}>
                  mkstech.hr@gmail.com
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 600, color: "#3A2357" }}>
                  📞 Phone
                </Typography>
                <Typography sx={{ color: "#7A6F86" }}>
                  +92 340 8618145
                </Typography>
              </Box>
            </Box>

            {/* ===== RIGHT FORM ===== */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "#3A2357",
                  mb: 3,
                }}
              >
                Send us a message
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                }}
              >
                <TextField label="Your Name" fullWidth />
                <TextField label="Email Address" fullWidth />
                <TextField
                  label="Subject"
                  fullWidth
                  sx={{ gridColumn: "1 / -1" }}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ gridColumn: "1 / -1" }}
                />

                <Button
                  variant="contained"
                  sx={{
                    gridColumn: "1 / -1",
                    mt: 1,
                    backgroundColor: "#E30613",
                    py: 1.4,
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#c20510",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
