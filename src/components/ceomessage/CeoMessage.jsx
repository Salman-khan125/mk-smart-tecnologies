import { Box, Container, Typography } from "@mui/material";


const CeoMessage = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 5, md: 8 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#3A2357",
                mb: 3,
              }}
            >
              CEO Message
            </Typography>

            <Typography
              sx={{
                color: "#6b5c7a",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              As the Founder and{" "}
              <Box component="span" sx={{ color: "#e30613", fontWeight: 600 }}>
                CEO
              </Box>{" "}
              of MK Smart Technologies, I lead a forward-thinking mobile app
              development company dedicated to transforming ideas into
              cutting-edge, user-focused solutions. With a deep passion for
              technology and a commitment to excellence, I have driven the
              development of a diverse portfolio of mobile applications —
              ranging from widely used product-based solutions across the
              United States to proprietary projects that showcase our creativity
              and technical expertise.
            </Typography>

            <Typography
              sx={{
                color: "#6b5c7a",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                mb: 4,
              }}
            >
              Under my leadership,{" "}
              <Box component="span" sx={{ color: "#e30613", fontWeight: 600 }}>
                MK Smart Technologies
              </Box>{" "}
              delivers cutting-edge mobile solutions. With strategic vision and
              technical expertise, we create scalable, impactful, and
              future-ready products.
            </Typography>

            {/* SIGNATURE */}
            <Box
              component="img"
              src="/assets/hero/sign.png"
              alt="CEO Signature"
              sx={{
                height: 60,
                mt: 1,
                ml:{xs:5}
              }}
            />
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              component="img"
              src="/assets/hero/ceo.png"
              alt="CEO"
              sx={{
                width: { xs: "80%", sm: "70%", md: "70%" },
                maxWidth: 420,
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CeoMessage;
