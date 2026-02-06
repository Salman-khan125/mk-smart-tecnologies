import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const hoverStyle = {
  transition: "all 0.35s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
  },
};

const Portfolio = () => {
  return (
<>
  <Box
        sx={{
          width: "100%",
          height: { xs: 200, md: 300 },
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
              fontSize: { xs: "1.8rem", md: "3rem" },
            }}
          >
            Portfolio
          </Typography>
          <Typography sx={{ color: "#fff", opacity: 0.8 }}>
            Home / portfolio
          </Typography>
        </Box>
      </Box>
    
    <Box sx={{ py: { xs: 6, md: 10 } }}>


      
      <Container maxWidth="lg">
        {/* ===== TITLE ===== */}
        <Box sx={{ maxWidth: 600, mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.7rem" },
              color: "#3A2357",
              mb: 1,
            }}
          >
            Portfolio
          </Typography>

          <Box
            component="img"
            src="/assets/portfolio/Vector.png"
            alt="vector"
            sx={{ width: 120, mb: 1.5 }}
          />

          <Typography
            sx={{
              color: "#7A6F86",
              fontSize: "0.95rem",
            }}
          >
            Have a look on some of our products
          </Typography>
        </Box>

        {/* ===== FIRST ROW ===== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "1fr 2fr 1fr",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {/* LEFT CARD */}
          <Box
            component="img"
            src="/assets/portfolio/image1.png"
            alt="portfolio"
            sx={{
              width: "100%",
              height: { xs: 220, md: 260 },
              objectFit: "cover",
              borderRadius: 3,
              ...hoverStyle,
            }}
          />

          {/* CENTER FEATURE CARD (CLICKABLE) */}
          <Box
            component={Link}
            to="/portfolio"   // 🔴 change route if needed
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              height: { xs: 260, md: 260 },
              display: "block",
              ...hoverStyle,
            }}
          >
            <Box
              component="img"
              src="/assets/portfolio/image2.png"
              alt="featured"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* RIGHT CARD */}
          <Box
            component="img"
            src="/assets/portfolio/image3.png"
            alt="portfolio"
            sx={{
              width: "100%",
              height: { xs: 220, md: 260 },
              objectFit: "cover",
              borderRadius: 3,
              ...hoverStyle,
            }}
          />
        </Box>

        {/* ===== SECOND ROW ===== */}
        <Box
          sx={{
            mt: { xs: 2, md: 3 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {["image4.png", "image5.png", "image6.png", "image1.png"].map(
            (img, i) => (
              <Box
                key={i}
                component="img"
                src={`/assets/portfolio/${img}`}
                alt="portfolio"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 3,
                  ...hoverStyle,
                }}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
    </>
  );
};


export default Portfolio;
