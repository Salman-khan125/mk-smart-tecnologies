import { Box, Container, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box>
      {/* ================= Background Section ================= */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 180, sm: 220, md: 300 },
          backgroundImage: `url("/assets/about/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
            fontSize: {
              xs: "1.6rem",
              sm: "2.2rem",
              md: "3rem",
            },
          }}
        >
          About
        </Typography>
      </Box>

      {/* ================= Main Content ================= */}
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* ================= Left Side Text ================= */}
          <Box sx={{ flex: 1 }}>
           <Box sx={{ position: "relative", display: "inline-block", mb: { xs: 3, md: 6 } }}>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: {
        xs: "1.6rem",
        sm: "2rem",
        md: "2.5rem",
      },
      lineHeight: 1.2,
    }}
  >
    About{" "}
    <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
      Us
      {/* Yellow Vector */}
      <Box
        component="img"
        src="/assets/about/Vector1.png"   // 🔴 use your actual vector file name
        alt="Title underline"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: { xs: -10, md: -14 },
          width: { xs: 50, sm: 70, md: 90 },
        }}
      />
    </Box>
  </Typography>
</Box>


            <Typography
              sx={{
                mb: 2,
                color: "#6b5e7a",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
              }}
            >
              MK Smart Technologies is a leading developer of Web and Mobile
              related applications and solutions in Pakistan. Our company was
              established in 2018, with a focus on design and development of
              innovative solutions for this converging market of Web and Mobile.
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: "#6b5e7a",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
              }}
            >
              We pride ourselves as one of the top Web and Digital design
              companies in Pakistan. Our design process and dedication to
              clients make us stand out from the others.
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                mt: { xs: 4, md: 6 },
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.8rem",
                  md: "2.2rem",
                },
              }}
            >
              Vision
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: "#6b5e7a",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
              }}
            >
              Redefining tech with inclusivity, innovation, and excellence,
              empowering individuals and businesses worldwide.
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.8rem",
                  md: "2.2rem",
                },
              }}
            >
              Mission
            </Typography>

            <Typography
              sx={{
                color: "#6b5e7a",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
              }}
            >
              We create exceptional, accessible, and sustainable digital
              products, driving innovation and growth while shaping
              Pakistan's digital landscape.
            </Typography>
          </Box>

          {/* ================= Right Side Images ================= */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Image 1 */}
            <Box
              component="img"
              src="/assets/about/image1.png"
              alt="About Image 1"
              sx={{
                width: "100%",
                maxWidth: { xs: 260, sm: 320, md: 420 },
                borderRadius: 2,
                mb: 4,
                zIndex: 1,
              }}
            />

            {/* Yellow Vector */}
            <Box
              component="img"
              src="/assets/about/Vector2.png"
              alt="Decorative Vector"
              sx={{
                position: "absolute",
                top: { xs: 20, sm: 30, md: 50 },
                right: { xs: 10, sm: 30, md: 40 },
                width: { xs: 50, sm: 90, md: 160 },
                zIndex: 2,
              }}
            />

            {/* Image 2 */}
            <Box
              component="img"
              src="/assets/about/image2.png"
              alt="About Image 2"
              sx={{
                width: "100%",
                maxWidth: { xs: 260, sm: 320, md: 420 },
                borderRadius: 2,
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
